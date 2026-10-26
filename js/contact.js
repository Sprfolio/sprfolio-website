const form=document.querySelector('#project-form');
const status=document.querySelector('#form-status');
if(form&&status){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      status.textContent='Please complete the required fields.';
      return;
    }
    status.textContent='Your details are valid, but this form does not send inquiries yet. Please use the Email link to contact us. Your details remain here for you to copy.';
  });
}

