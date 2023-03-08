
export const TempColumn = (props)=>{
    return [
        {
            prop: "title",
            isFilterable: true,
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}