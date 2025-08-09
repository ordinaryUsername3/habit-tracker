import {toaster} from '../components/ui/toaster'



export const toastMiddleware = (store) => (next) => (action) => {
    //A meta object can be used to pass additional information
    if (action.type.endsWith('/fulfilled')) {
        const message = action.payload?.message;
        if (message) {
            toaster.create({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-center'
            })
        }
    }

    if (action.type.endsWith('/rejected')) {
        const errorMessage = action.payload?.message || action.error?.message || 'An error occurred';
        toaster.create({
            title: 'Error',
            description: errorMessage,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-center'
        })
    }

    if (action.meta?.toast) {
        toaster.create({
            title: action.meta?.title,
            description: action.meta?.description,
            status: action.meta?.status || 'info',
            duration: action.meta?.duration || 5000,
            isClosable: true,
            position: action.meta?.position || 'top-middle'
        });
    }

    return next(action);
}