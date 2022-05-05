import React, { useEffect } from "react";

function ProjectDetails(props) {
  const [value, setValue] = props.stateContainer;
  function onChangeHandlerProject(event) {
    event.target.name === "title"
      ? setValue((ps) => ({ ...ps, projectTitle: event.target.value }))
      : event.target.name === "link"
      ? setValue((ps) => ({ ...ps, projectLink: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, projectDescription: event.target.value }))
      : console.log("Error storing project details");
  }
  function onChangeHandlerProject1(event) {
    event.target.name === "title"
      ? setValue((ps) => ({ ...ps, Project1Title: event.target.value }))
      : event.target.name === "link"
      ? setValue((ps) => ({ ...ps, Project1Link: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, Project1Description: event.target.value }))
      : console.log("Error storing Project1 details");
  }
  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <div>
        <h3>Project Details</h3>
      </div>

      <hr />
      <div class="row">
        <div>
          <h4>Peroject 1</h4>
        </div>

        <div class="col-2"></div>
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            name="title"
            value={value.projectTitle}
            onChange={(e) => {
              onChangeHandlerProject(e);
            }}
            placeholder="title *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="link"
            value={value.projectLink}
            onChange={(e) => {
              onChangeHandlerProject(e);
            }}
            placeholder="Link *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="description"
            value={value.projectDescription}
            onChange={(e) => {
              onChangeHandlerProject(e);
            }}
            placeholder="Description*"
            required
          />
        </div>
        <div class="col-2"></div>
      </div>
      <hr />
      <div class="row">
        <div>
          <h4>Peroject 2</h4>
        </div>

        <div class="col-2"></div>
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            name="title"
            value={value.Project1Title}
            onChange={(e) => {
              onChangeHandlerProject1(e);
            }}
            placeholder="title *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="link"
            value={value.Project1Link}
            onChange={(e) => {
              onChangeHandlerProject1(e);
            }}
            placeholder="Link *"
            required
          />
          <input
            type="text"
            class="form-control"
            name="description"
            value={value.Project1Description}
            onChange={(e) => {
              onChangeHandlerProject1(e);
            }}
            placeholder="Description*"
            required
          />
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  );
}

export default ProjectDetails;
