import create from 'zustand'


const useData = create(

set =>({
    fetchedData: null,
    setFetchedData: (data) =>set({fetchedData: data})

})
)

export default useData
