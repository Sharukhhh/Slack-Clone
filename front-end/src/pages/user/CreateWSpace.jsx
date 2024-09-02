import Input from "../../components/fields/Input";
import FormWrapper from "../../components/wrappers/FormWrapper";
import { useDetailsForm } from "../../hooks/workspaceForm";
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { useCreateWorkspaceMutation, useGetAllUsersQuery } from "../../redux/services/userServices";
import { errorAlert, infoAlert, successAlert } from "../../utils/alerts";
import SelectedDisplayCard from "../../components/cards/SelectedDisplayCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../../components/buttons/Button";

const CreateWspace = () => {

    const {workSpaceDetails , changeData , addSelectedUser , removeSelectedUser , resetData} = useDetailsForm();
    const [createWorkspace , {isLoading}] = useCreateWorkspaceMutation()
    const {data} = useGetAllUsersQuery()
    const [selectedUser , setSelectedUser] = useState('');

    const handleAddingUser = () => {
        if(selectedUser) {
            const user = JSON.parse(selectedUser)
            addSelectedUser(user.id , user.email);
            setSelectedUser('');
        } else {
            infoAlert('First Select from options');
            return;
        }
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault();
       
        try {
            if(workSpaceDetails.users.length === 0) return errorAlert('Select Users to add to your workspace');

            const userIdArray = workSpaceDetails.users.map((user) => user.id);
            workSpaceDetails.users = userIdArray;

            const response = await createWorkspace(workSpaceDetails).unwrap();
            successAlert(response.message)
            resetData();
            
        } catch (error) {
            errorAlert(error?.data?.error || error?.error);
        }
    }
    
    return (
        <>  
            <Helmet>
                <title>Create Your Workspace - Slack</title>
            </Helmet>
            <FormWrapper>

                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Your Workspace</h2>
                    <Link to={'/home'} className="bg-purple-100 p-2 rounded-full cursor-pointer shadow-md">
                        <IoReturnUpBack size={20}/>
                    </Link>
                </div>

                <p className="mb-6 text-gray-600">
                    Fill the requirements below to create your workspace
                </p>

                {/* Form to create Workspace */}
                <form onSubmit={handleFormSubmission} className='flex space-y-8 flex-col'>
                    <Input
                        label={'Name your Workspace'}
                        placeholder={'Your Team name, Group name etc'}
                        name={'workSpaceName'}
                        value={workSpaceDetails.workSpaceName}
                        onChange={changeData}
                        maxLength={30}
                    />
                    <textarea 
                        name="description" required
                        value={workSpaceDetails.description} onChange={changeData}
                        placeholder="Describe about your workspace"
                        className="w-full px-3 py-2 border border-purple-200 rounded resize-none focus:outline-none focus:ring focus:border-purple-500"
                        rows={5} 
                    />
                    <div className="flex flex-col space-y-4 md:flex-row items-start md:items-center md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <Input
                                isSelect={true}
                                isSelectAndUser={true}
                                selectData={data}
                                selectTitle={'Select User'}
                                label={'Select users to add to your workspace'}
                                placeholder={'Select Users'}
                                name={'users'}
                                value={selectedUser}
                                onChange={(e) => setSelectedUser(e.target.value)}
                            />
                        </div>
                        <Button btnText={'Add'} type={'button'} onClick={handleAddingUser}  />
                    </div>
                    <SelectedDisplayCard users={workSpaceDetails.users} removeUser={removeSelectedUser} />

                    <Input
                        label={'Add a default Channel for Workspace'}
                        placeholder={'Channel Name here'}
                        name={'channelName'}
                        value={workSpaceDetails.channelName}
                        onChange={changeData}
                        maxLength={30}
                    />

                    <button type="submit" className="w-fit py-2 px-4 text-white bg-purple-900 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Create
                    </button>
                </form>
            </FormWrapper>
        </>
    )
};
    

export default CreateWspace;