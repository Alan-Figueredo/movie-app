"use client"
import { useState } from "react";

export const Prueba = (props) => {
    const credits = props
    const [department, setDepartment] = useState({
        acting: [], writing: [], directing: [], production: [], sound: [], art: [], editing: [], camera: [], makeUp: [], crew: [], lighting: []
    })

    const sortCreditsCategories = () => {
        credits.cast.forEach(element => {
            const key = element.known_for_department
            if (key == "Acting") {
                setDepartment(department.acting.push(element))
            }
            else if (key == "Writing") {
                setDepartment(department.writing.push(element))
            }
            else if (key == "Directing") {
                setDepartment(department.directing.push(element))
            }
            else if (key == "Production") {
                setDepartment(department.production.push(element))
            }
            else if (key == "Sound") {
                setDepartment(department.sound.push(element))
            }
            else if (key == "Art") {
                setDepartment(department.art.push(element))
            }
            else if (key == "Editing") {
                setDepartment(department.editing.push(element))
            }
            else if (key == "Camera") {
                setDepartment(department.camera.push(element))
            }
            else if (key == "Costume & Make-Up") {
                setDepartment(department.makeUp.push(element))
            }
            else if (key == "Crew") {
                setDepartment(department.crew.push(element))
            }
            else if (key == "Lighting") {
                setDepartment(department.lighting.push(element))
            }
        });
    }
    sortCreditsCategories()
    console.log(department)
    return (
        <div className="creditsContainer">
            {credits.cast.map((item) => {
                return (
                    <p className="creditsName" key={item.cast_id}>{item.name}</p>
                )
            })}
        </div>
    )
}