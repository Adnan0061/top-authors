const getDb = () => localStorage.getItem('added_author') 
const addToDb = (item) => {
    const exitingItems = getDb()
    console.log(exitingItems)
    let lStorage = []
    if(exitingItems !== null){
    lStorage = JSON.parse(exitingItems)}
    if(!lStorage.includes(item)){
        lStorage.push(item)
    }
    updateDb(lStorage)
}

const updateDb = (db) => {

    localStorage.setItem('added_author', JSON.stringify(db))  
    console.log(db)
}

const removeDb = (item) => {
    const exitingItems = getDb()
    let lStorage = JSON.parse(exitingItems)
    const deleted = lStorage.filter(ele => ele !== item)
    updateDb(deleted)
}

export {getDb, addToDb, updateDb, removeDb}
