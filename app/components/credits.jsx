
export async function Credits(props) {
    const { credits } = props
    return (
        <section>
            <h2>Credits</h2>
            <div className="creditsContainer">
                {credits.cast.map((item) => {
                    return (
                        <p className="creditsName" key={item.cast_id}>{item.name}</p>
                    )
                })}
            </div>
        </section>
    )
}