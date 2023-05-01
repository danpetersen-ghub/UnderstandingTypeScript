const getData = async (id: number | string) => {
    return new Promise((resolve, reject) => {
        if (id === 1) {
            setTimeout(() => {
                resolve({ "status": 200, "message": "OK" });
            }, 4000);
        } else if (typeof id === "string") {
            reject(new Error("Invalid ID"));
        } else {
            resolve(400);
        }
    });
};

(async () => {
    try {
        const res1 = await getData(1);
        console.log(res1);

        const res2 = await getData("1");
        console.log(res2);

        const res3 = await getData("abc");
        console.log(res3);

    } catch (error) {
        console.log(error.message);
    }
})();