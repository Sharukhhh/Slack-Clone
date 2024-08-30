import { useState } from "react";
import Button from "../buttons/Button";
import Input from "../fields/Input";
import { useAddChannelMutation } from "../../redux/services/userServices";
import { errorAlert, successAlert } from "../../utils/alerts";

const AddChannelModal = ({workSpace ,onClose}) => {

    const [channelName , setChannelName] = useState('');
    const [addChannel] = useAddChannelMutation()

    const handleChannelData = async (e) => {
        e.preventDefault();
        try {
            if(channelName.trim() === '') return errorAlert('Invalid Entry');

            const response = await addChannel({channelName , workSpaceId: workSpace?._id}).unwrap()
            console.log(response);
            successAlert(response?.message);
            
        } catch (error) {
            errorAlert(error?.data?.error || error?.error);
        }
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Add Channel</h2>

                    <form onSubmit={handleChannelData} className="space-y-4">
                        <Input
                            label={'The Workspace which the channel belongs'}
                            value={workSpace?.workSpace_Name}
                            disabled
                        />
                        <Input
                            label={'Add Channel'}
                            placeholder={'Enter Channel Name here'}
                            name={'channelName'}
                            type={'text'}
                            value={channelName}
                            onChange={(e) => setChannelName(e.target.value)}
                        />

                        <div className="mt-6 flex justify-between">
                            <Button
                                btnText={'Add'}
                            />
                            <Button
                                btnText={'Cancel'}
                                isCancel={true}
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