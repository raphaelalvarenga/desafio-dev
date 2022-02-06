export const getTimestamp = (data: string, hora: string) => {
    data = [data.slice(0, 4), "-", data.slice(4, 6), "-", data.slice(6)].join(
        ""
    );

    hora = [hora.slice(0, 2), ":", hora.slice(2, 4), ":", hora.slice(4)].join(
        ""
    );

    return `${data} ${hora}`;
};
