function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Seja Bem Vinda(o)!!!</h2>
                        <p>Expresse teus pensamentos.</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://i.imgur.com/VpwApCU.png" 
                            alt="Imagem da Página Home" 
                            width="800px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home