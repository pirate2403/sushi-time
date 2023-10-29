export function debounce<T = unknown>(func: (...args: T[]) => void, delay: number) {
    let timer: undefined | ReturnType<typeof setTimeout>;

    return (...args: T[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
