const create = document.getElementById("create-btn")
const container = document.getElementById("container")

const savenotes = function() {
    const notes = document.querySelectorAll(".note-area .text-area textarea")
    console.log(notes)
    const data = []
    notes.forEach(
        (note_area) => {
            data.push(note_area.value)
        }
    )
    console.log(data)
    localStorage.setItem("notes", JSON.stringify(data))
}


create.addEventListener("click", () => {
    const note_area = document.createElement("div")
    note_area.className = "note-area"
    

    note_area.innerHTML =  `
        <div class="top-note">
            <button class="delete" id="delete_btn">Delete</button>
            <button class="Save" id="save_btn">Save</button>
        </div>
        <div class="text-area">
            <textarea></textarea>
        </div>`
    note_area.querySelector(".delete").addEventListener("click", function() {
        note_area.remove()
        savenotes()
    })
    note_area.querySelector(".Save").addEventListener("click", function() {
        savenotes()
    })
    container.appendChild(note_area)
    savenotes()

})


console.log("HELLO")