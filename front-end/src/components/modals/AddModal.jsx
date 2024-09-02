import { useState } from "react";
import Button from "../buttons/Button";
import Input from "../fields/Input";
import { useAddChannelMutation, useUsersNotInWorkSpaceQuery } from "../../redux/services/userServices";
import { errorAlert, successAlert } from "../../utils/alerts";
import SelectedDisplayCard from "../cards/SelectedDisplayCard";

const AddChannelModal = ({forChannel, workSpace ,onClose}) => {

    const [channelName , setChannelName] = useState('');
    const [addChannel] = useAddChannelMutation();
    const {data} = useUsersNotInWorkSpaceQuery(workSpace?._id , {skip : forChannel})

    const handleChannelData = async (e) => {
        e.preventDefault();
        try {
            if(channelName.trim() === '') return errorAlert('Invalid Entry');

            const response = await addChannel({channelName , workSpaceId: workSpace?._id}).unwrap()
            successAlert(response?.message);
            
        } catch (error) {
            errorAlert(error?.data?.error || error?.error);
        }
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">{forChannel ? 'Add Channel' : 'Add Members'}</h2>

                    <form onSubmit={handleChannelData} className="space-y-4">
                        <Input
                            label={forChannel ? 'The Workspace which the channel belongs' : 'Current Workspace'}
                            value={workSpace?.workSpace_Name}
                            disabled
                        />
                        {!forChannel ? (
                            <>
                                <div className="flex flex-col space-y-4 md:flex-row items-start md:items-center md:space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <Input
                                            isSelect={true}
                                            isSelectAndUser={true}
                                            selectData={data}
                                            selectTitle={'Add Users'}
                                        />
                                    </div>
                                    <Button btnText={'Add'} type={'button'}  />
                                </div>
                                <SelectedDisplayCard/>
                            </>
                        ) : (
                            <Input
                                label={'Add Channel'}
                                placeholder={'Enter Channel Name here'}
                                name={'channelName'}
                                type={'text'}
                                value={channelName}
                                onChange={(e) => setChannelName(e.target.value)}
                            />
                        )}

                        <div className="mt-6 flex justify-between">
                            <Button
                                btnText={forChannel ? 'Add' : 'Submit'}
                                type={'submit'}
                            />
                            <Button
                                btnText={'Cancel'}
                                type={'button'}
                                onClick={onClose}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default AddChannelModal;