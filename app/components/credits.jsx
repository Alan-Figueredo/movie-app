import React from "react";
export function Credits(props) {
    const { credits } = props
    return (
        <section>
            <h2>Credits</h2>
            <div className="creditsContainer">
                {credits?.cast?.slice(0, 55).map((item, index) => {
                    return (
                        <p className="creditsName" key={item.cast_id + index}>{item.name}</p>
                    )
                })}
            </div>
        </section>
    )
}