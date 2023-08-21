
export default function ImageComponent (props) {
    //props la tham so duoi ddang object
    // nhan tat ca cac du lieu tu cac component khac truyen vao
    return (
        <img width={props.w} 
        height={props.h}
        src={props.source}
        />
    )
}