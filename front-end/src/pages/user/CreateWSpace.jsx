import Input from "../../components/fields/Input";
import FormWrapper from "../../components/wrappers/FormWrapper";
import { useDetailsForm } from "../../hooks/workspaceForm";
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { useCreateWorkspaceMutation } from "../../redux/services/userServices";
import { errorAlert, successAlert } from "../../utils/alerts";

const CreateWspace = () => {
    const {workSpaceDetails , changeData} = useDetailsForm();
    const [createWorkspace , {isLoading}] = useCreateWorkspaceMutation()

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        try {
            const response = await createWorkspace(workSpaceDetails).unwrap();
            successAlert(response.message)
            
        } catch (error) {
            errorAlert(error?.data?.error || error?.error);
        }
    }
    
    return (
        <>
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

                <form onSubmit={handleFormSubmission} className='flex space-y-8 flex-col'>
                    <Input
                        label={'Name your Workspace'}
                        placeholder={'Your Team name, Group name etc'}
                        name={'workSpaceName'}
                        value={workSpaceDetails.workSpaceName}
                        onChange={changeData}
                    />
                    <textarea 
                        name="description" required
                        value={workSpaceDetails.description} onChange={changeData}
                        placeholder="Describe about your workspace"
                        className="w-full px-3 py-2 border border-purple-200 rounded resize-none focus:outline-none focus:ring focus:border-purple-500"
                        rows={5} 
                    />
                    <Input
                        label={'Add a default Channel for Workspace'}
                        placeholder={'Channel Name here'}
                        name={'channelName'}
                        value={workSpaceDetails.channelName}
                        onChange={changeData}
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