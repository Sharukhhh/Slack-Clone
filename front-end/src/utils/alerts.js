import Swal from 'sweetalert2';



export const successAlert = (message) => {
    Swal.fire({
        title: message,
        icon: 'success'
    });
};

export const errorAlert = (message) => {
    Swal.fire({
        title: message,
        icon: 'error'
    })
}