import imgOne from "../../assets/DP1.jpeg";

const DP = ({ className }) => {

    return (
        <>
            <img loading='lazy' className={className} src={imgOne} alt="person img" />
        </>
    );
};

export default DP;