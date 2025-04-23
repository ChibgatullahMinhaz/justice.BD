import toast from "react-hot-toast";

export const getLawyers = (key) => {
    try {
        const storedLawyers = localStorage.getItem(key);
        return storedLawyers ? JSON.parse(storedLawyers) : [];
    } catch (error) {
        toast.error(error.message)
    }
}

export const addToLawyer = (key, id) => {
    const storedLawyers = getLawyers(key);
    const isExist = storedLawyers.includes(id);
    if (!isExist) {
        storedLawyers.push(id);
        localStorage.setItem(key, JSON.stringify(storedLawyers));
        return true;
    }
     return false;
}

export const removeData = (id, key)=> {
const storedLawyers = getLawyers(key);
const remainingData = storedLawyers.filter(data => data !==id);
localStorage.setItem(key, JSON.stringify(remainingData));
}