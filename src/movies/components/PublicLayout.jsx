import { useOutlet } from "react-router-dom";
const PublicLayout = () => {
    const outlet = useOutlet();
    return (
        <>
            {outlet}
        </>
    )
}
export default PublicLayout;