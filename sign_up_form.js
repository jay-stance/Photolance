// getting all the elements
const section_one_next = document.querySelector(".section_one .prev_nxt_buttons button");
const profile_pic_drop = document.querySelector(".section_two");
const profile_pic_img = document.querySelector(".section_two .profile_img img");
const profile_pic_icon = document.querySelector(".section_two .profile_img label i");
const profile_choose = document.querySelector("#profile_choose")
const password_eye_icon = document.querySelector(".section_one .password i");
const password_field = document.querySelector(".section_one .password input")
const skills_minor_div = document.querySelectorAll(".section_four .major_categories .minor_div h5")
const chosen_skills_div = document.querySelector(".section_four .chosen_skills")
const required_skills_minor_div = document.querySelectorAll(".section_eight .major_categories .minor_div h5")
const required_chosen_skills = document.querySelector(".required_chosen_skills")
const addres_input_field = document.querySelector(".section_five .address_div input")
const valid_address = document.querySelector(".section_five .address_div .drop_down_address")
const project_drag_file = document.querySelector(".section_eight .project_info")
const project_files_input = document.querySelector(".section_eight .project_info .upload_files input")
const project_choose_icon = document.querySelector("#upload_files")
const section = document.querySelectorAll(".section")

const section_two_prev_button = document.querySelector(".section_two .prev_nxt_buttons .previous")
const section_two_next_button = document.querySelector(".section_two .prev_nxt_buttons .next")
const section_one_next_button = document.querySelector(".section_one .prev_nxt_buttons button")
const section_three_work = document.querySelector(".section_three .work")
const section_three_hire = document.querySelector(".section_three .hire")
const section_three_prev_button = document.querySelector(".section_three .prev_nxt_buttons .previous")
const section_three_next_button = document.querySelector(".section_three .prev_nxt_buttons .next")
const work_to_be_done = document.querySelector(".work_to_be_done")
const hire_or_work = document.querySelector(".section_three")
const section_four_prev_button = document.querySelector(".section_four .prev_nxt_buttons .previous")
const section_four_next_button = document.querySelector(".section_four .prev_nxt_buttons .next")
const section_five_prev_button = document.querySelector(".section_five .prev_nxt_buttons .previous")
const section_five_next_button = document.querySelector(".section_five .prev_nxt_buttons .next")
const work_to_be_done_prev_button = document.querySelector(".work_to_be_done .prev_nxt_buttons .previous")
const work_to_be_done_next_button = document.querySelector(".work_to_be_done .prev_nxt_buttons .next")

const how_do_you_want_it_section = document.querySelector(".how_do_you_want_it")
const how_do_you_want_it_row = document.querySelectorAll(".how_do_you_want_it .row")
const how_do_you_want_it_prev_button = document.querySelector(".how_do_you_want_it .prev_nxt_buttons .previous")
const how_do_you_want_it_next_button = document.querySelector(".how_do_you_want_it .prev_nxt_buttons .next")

const how_do_you_want_to_pay_prev_button = document.querySelector(".how_do_you_want_to_pay .prev_nxt_buttons .previous")
const how_do_you_want_to_pay_next_button = document.querySelector(".how_do_you_want_to_pay .prev_nxt_buttons .next")
const how_do_you_want_to_pay_row = document.querySelectorAll(".how_do_you_want_to_pay .row")

const visibility_prev_button = document.querySelector(".visibility .prev_nxt_buttons .previous")
const visibility_next_button = document.querySelector(".visibility .prev_nxt_buttons .next")
const visibility = document.querySelector(".visibility")

const fixed_price = document.querySelector(".fixed_price")
const fixed_price_prev_button = document.querySelector(".fixed_price .prev_nxt_buttons .previous")
const fixed_price_next_button = document.querySelector(".fixed_price .prev_nxt_buttons .next")

const project_review_prev_button = document.querySelector(".project_review .prev_nxt_buttons .previous")
const project_review_next_button = document.querySelector(".project_review .prev_nxt_buttons .next")
const project_review = document.querySelector(".project_review")


const second_step_icon = document.querySelector(".main_body .left .main .second .right_row i")
const current_line = document.querySelector(".main_body .left .main .second")
const prev_line = document.querySelector(".main_body .left .main .first")

const third_step_icon = document.querySelector(".main_body .left .main .third .right_row i")
const third_current_line = document.querySelector(".main_body .left .main .third")
const third_prev_line = document.querySelector(".main_body .left .main .second")

const fourth_step_icon = document.querySelector(".main_body .left .main .fourth .right_row i")
const fourth_current_line = document.querySelector(".main_body .left .main .fourth")
const fourth_prev_line = document.querySelector(".main_body .left .main .third")

const fifth_step_icon = document.querySelector(".main_body .left .main .fifth .right_row i")
const fifth_current_line = document.querySelector(".main_body .left .main .fifth")
const fifth_prev_line = document.querySelector(".main_body .left .main .fourth")

const hirer_last_step = document.querySelector(".section_five .prev_nxt_buttons .next")
const loading_modal = document.querySelector(".loading_modal")

let as_project = true


// adding eventlisteners to all elements gotten

password_eye_icon.addEventListener("click", password_toggle_display)
section_one_next.addEventListener("click", section_one_next_page)

profile_choose.addEventListener("change", profile_choose_change)
profile_pic_drop.addEventListener("dragenter", profile_drag_enter)
profile_pic_drop.addEventListener("dragover", profile_dragover)
profile_pic_drop.addEventListener("drop", profile_drop)

skills_minor_div.forEach(minor_div => {
    minor_div.addEventListener("click", display_collapsable_skills)
    console.log(minor_div)
})

addres_input_field.addEventListener("keyup", show_valid_address)

project_drag_file.addEventListener("dragenter", profile_drag_enter)
project_drag_file.addEventListener("dragover", profile_dragover)
project_drag_file.addEventListener("drop", project_drag_drop)
project_files_input.addEventListener("change", project_choose_change)

required_skills_minor_div.forEach(minor_div => {
    minor_div.addEventListener("click", required_display_collapsable_skills)
})

section.forEach(section => {
    section.style.display = 'none'
})

section_three_hire.addEventListener("click", function() {
    section_three_work.style.border = '3px solid #beb5d1'
    this.style.border = '3px solid #fff'
    console.log("hiree")
})

section_three_work.addEventListener("click", function() {
    section_three_hire.style.border = '3px solid #beb5d1'
    this.style.border = '3px solid #fff'
})



section_one_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
    second_step_icon.classList.add("step_form");
    current_line.classList.add("step_process_2")
    prev_line.classList.add("step_process")
})

section_two_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
    second_step_icon.classList.remove("step_form");
    current_line.classList.remove("step_process_2")
    prev_line.classList.remove("step_process")
})
section_two_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
    third_step_icon.classList.add("step_form");
    third_current_line.classList.add("step_process_2")
    third_prev_line.classList.add("step_process")
})

section_three_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
    third_step_icon.classList.remove("step_form");
    third_current_line.classList.remove("step_process_2")
    third_prev_line.classList.remove("step_process")
})
section_three_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    let check = false
    if (this.parentElement.previousElementSibling.style.border === '3px solid rgb(190, 181, 209)') {
        display(this.parentElement.parentElement, work_to_be_done)
        check = true
    } else if (this.parentElement.previousElementSibling.previousElementSibling.style.border === '3px solid rgb(190, 181, 209)') {
        display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
        check = true
    }

    if (check) {
        fourth_step_icon.classList.add("step_form");
        fourth_current_line.classList.add("step_process_2")
        fourth_prev_line.classList.add("step_process")
    }
})

section_four_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
    fourth_step_icon.classList.remove("step_form");
    fourth_current_line.classList.remove("step_process_2")
    fourth_prev_line.classList.remove("step_process")
})
section_four_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
})

section_five_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
})
section_five_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
})

work_to_be_done_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, hire_or_work)
    fourth_step_icon.classList.remove("step_form");
    fourth_current_line.classList.remove("step_process_2")
    fourth_prev_line.classList.remove("step_process")
})
work_to_be_done_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
})

how_do_you_want_it_row.forEach(row => {
    row.addEventListener("click", how_do_you_want_it)
})
how_do_you_want_it_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
})
how_do_you_want_it_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    console.log('last', this.parentElement.previousElementSibling.style.border)
    console.log("second", this.parentElement.previousElementSibling.previousElementSibling.style.border)
    console.log('first', this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.border)
    if (this.parentElement.previousElementSibling.style.border === '3px solid rgb(255, 255, 255)') {
        display(this.parentElement.parentElement, visibility)
    } else if (this.parentElement.previousElementSibling.previousElementSibling.style.border === '3px solid rgb(255, 255, 255)') {
        display(this.parentElement.parentElement, visibility)
    } else if (this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.border === '3px solid rgb(255, 255, 255)') {
        display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
    }
})

how_do_you_want_to_pay_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
})
how_do_you_want_to_pay_next_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.nextElementSibling)
})

how_do_you_want_to_pay_row.forEach(row => {
    row.addEventListener("click", how_do_you_want_to_pay)
})

hirer_last_step.addEventListener("click", function(e) {
    console.log("reached")
    fifth_step_icon.classList.add("step_form");
    fifth_current_line.classList.add("step_process_2")
    fifth_prev_line.classList.add("step_process")
})

fixed_price_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    display(this.parentElement.parentElement, this.parentElement.parentElement.previousElementSibling)
})
fixed_price_next_button.addEventListener("click", function(e) {
    e.preventDefault();
    display(this.parentElement.parentElement, project_review)
    fifth_step_icon.classList.add("step_form");
    fifth_current_line.classList.add("step_process_2")
    fifth_prev_line.classList.add("step_process")
})


visibility_prev_button.addEventListener("click", function(e) {
    e.preventDefault();
    display(this.parentElement.parentElement, how_do_you_want_it_section)
});

visibility_next_button.addEventListener("click", function(e) {
    e.preventDefault();
    as_project = false
    display(this.parentElement.parentElement, project_review)
    fifth_step_icon.classList.add("step_form");
    fifth_current_line.classList.add("step_process_2")
    fifth_prev_line.classList.add("step_process")
})


project_review_prev_button.addEventListener("click", function(e) {
    e.preventDefault()
    if (as_project) {
        display(this.parentElement.parentElement, fixed_price)
    } else {
        display(this.parentElement.parentElement, visibility)
    }
    fifth_step_icon.classList.remove("step_form");
    fifth_current_line.classList.remove("step_process_2")
    fifth_prev_line.classList.remove("step_process")
});
project_review_next_button.addEventListener("click", function(e) {

});



function display(element, scroll_to) {
    loading_modal.style.display = 'flex'
    setTimeout(() => {
        loading_modal.style.display = 'none'
        scroll_to.style.display = 'flex'
        element.style.display = 'none'
    }, 1000);
}

function how_do_you_want_it() {
    how_do_you_want_it_row.forEach(row => {
        row.style.border = '3px solid #beb5d1'
    });
    this.style.border = '3px solid #fff'
}

function how_do_you_want_to_pay() {
    how_do_you_want_to_pay_row.forEach(row => {
        row.style.border = '3px solid #beb5d1'
    });
    this.style.border = '3px solid #fff'
}



// function calss of eventlisteners
function section_one_next_page() {
    console.log("clicked")
    this.style.background = 'red'
        // this.parentElement.parentElement.nextSiblingElement.style.display = 'block'
}

function profile_choose_change() {
    console.log(this.files)
    if (this.files.length > 0) {
        profile_pic_img.src = URL.createObjectURL(this.files[0])
        profile_pic_icon.className = 'ti ti-check'
    }
}

function profile_drag_enter(e) {
    e.stopPropagation();
    e.preventDefault()

    console.log("Drag enter")
}

function profile_dragover(e) {
    e.stopPropagation();
    e.preventDefault()
    console.log("drop over")
}

function profile_drop(e) {
    e.stopPropagation();
    e.preventDefault()
    console.log("man")

    const data_transfer = e.dataTransfer;
    const files = data_transfer.files;

    if (files.length > 0) {
        if (files[0].type === 'image/jpeg' || files[0].type === 'image/png' || files[0].type === 'image/jpg') {
            let src = URL.createObjectURL(files[0])
            console.log(src)
            profile_pic_img.src = src
        }
    }

}

function password_toggle_display() {
    if (password_eye_icon.className === 'fas fa-eye-slash') {
        password_eye_icon.classList.remove("fa-eye-slash")
        password_eye_icon.classList.add("fa-eye")
        password_field.type = 'text'
    } else {
        password_eye_icon.classList.remove("fa-eye")
        password_eye_icon.classList.add("fa-eye-slash")
        password_field.type = 'password'
    }

}

function display_collapsable_skills() {

    this.nextElementSibling.classList.toggle("active")
    let arrow_icon = this.querySelector("i")
    if (arrow_icon.classList.contains("fa-arrow-down")) {
        arrow_icon.classList.add("fa-arrow-up")
        arrow_icon.classList.remove("fa-arrow-down")
    } else {
        arrow_icon.classList.remove("fa-arrow-up")
        arrow_icon.classList.add("fa-arrow-down")
    }

    let chosen_skills = this.nextElementSibling.querySelectorAll("li");
    chosen_skills.forEach(skill => {
        skill.addEventListener("click", skill_chosen)
    })
}

function required_display_collapsable_skills() {

    this.nextElementSibling.classList.toggle("active")
    let arrow_icon = this.querySelector("i")
    if (arrow_icon.classList.contains("fa-arrow-down")) {
        arrow_icon.classList.add("fa-arrow-up")
        arrow_icon.classList.remove("fa-arrow-down")
    } else {
        arrow_icon.classList.remove("fa-arrow-up")
        arrow_icon.classList.add("fa-arrow-down")
    }

    let chosen_skills = this.nextElementSibling.querySelectorAll("li");
    chosen_skills.forEach(skill => {
        skill.addEventListener("click", required_skill_chosen)
    })
}

function skill_chosen() {
    let text = this.innerText.trim()

    let repetition_check = false
    let chech_skill = chosen_skills_div.querySelectorAll("p")
    chech_skill.forEach(check => {
        console.log(text.length, check.innerText.trim().length)
            // console.log('innner text bro', check.innerText, text)
        if (check.innerText.trim() === text.trim()) {
            repetition_check = true
        }
    })
    if (repetition_check) {
        this.style.background = '#beb5d1'
        this.style.color = '#fff'
        setTimeout(() => {
            this.style.background = 'transparent'
            this.style.color = 'inherit'
        }, 200);
        console.log("Else")
    } else {
        chosen_skills_div.innerHTML = chosen_skills_div.innerHTML + `<p>${text} <i class="fas fa-times"></i> </p>`
        let skill_to_remove = chosen_skills_div.querySelectorAll("i");
        console.log(skill_to_remove)

        skill_to_remove.forEach(skill => {
            skill.addEventListener("click", delete_skill)
        })

    }
}

function required_skill_chosen() {
    let text = this.innerText.trim()

    let repetition_check = false
    let chech_skill = required_chosen_skills.querySelectorAll("p")
    chech_skill.forEach(check => {
        console.log(text.length, check.innerText.trim().length)
            // console.log('innner text bro', check.innerText, text)
        if (check.innerText.trim() === text.trim()) {
            repetition_check = true
        }
    })
    if (repetition_check) {
        this.style.background = '#beb5d1'
        this.style.color = '#fff'
        setTimeout(() => {
            this.style.background = 'transparent'
            this.style.color = 'inherit'
        }, 200);
        console.log("Else")
    } else {
        required_chosen_skills.innerHTML = required_chosen_skills.innerHTML + `<p>${text} <i class="fas fa-times"></i> </p>`
        let skill_to_remove = required_chosen_skills.querySelectorAll("i");
        console.log(skill_to_remove)

        skill_to_remove.forEach(skill => {
            skill.addEventListener("click", delete_skill)
        })

    }


}

function delete_skill() {
    this.parentElement.remove()
}

function show_valid_address() {
    if (addres_input_field.value === '') {
        valid_address.style.display = 'none'
    } else {
        valid_address.style.display = 'block'
    }
}

function project_drag_drop(e) {
    e.stopPropagation();
    e.preventDefault()

    console.log("yess")
    const data_transfer = e.dataTransfer;
    const files = data_transfer.files;

    if (files.length > 0) {
        let src = URL.createObjectURL(files[0])
        console.log(src)
        project_files_input.src = src
            // profile_pic_icon.className = 'ti ti-check'
    }
}

function project_choose_change() {
    console.log(this.files)
    if (this.files.length > 0) {
        project_files_input.src = URL.createObjectURL(this.files[0])
        project_choose_icon.className = 'ti ti-check'
    }
}