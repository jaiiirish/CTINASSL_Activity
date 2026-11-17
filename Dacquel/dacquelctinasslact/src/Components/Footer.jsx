function Footer() {
    
    const styles = {
        textAlign: "center",
        fontSize: "medium",
    };
    
    return(
        <footer style={styles}>
            <p>&copy; {new Date().getFullYear()} Dacquel CTINASSL website</p>
        </footer>
    );
}

export default Footer
