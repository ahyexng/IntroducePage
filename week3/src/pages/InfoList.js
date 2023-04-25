import Info from "./Info";

const InfoList = (props) => {
    const {name, info} = props.data;
    return (
        <>
            <div className="name">{name}</div>
            <div className="contacts">
                {info.map((data, index) => (
                    <info data = {data} key ={index}/>
                ))}
            </div>
        </>
    );
};

export default InfoList;