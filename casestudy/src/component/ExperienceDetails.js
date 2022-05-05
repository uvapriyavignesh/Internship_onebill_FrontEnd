import React from "react";
import { useEffect } from "react";

function ExperienceDetails(props) {
  const [value, setValue] = props.stateContainer;
  function onChangeHandlerExperience(event) {
    event.target.name === "institude"
      ? setValue((ps) => ({ ...ps, experienceInstitude: event.target.value }))
      : event.target.name === "position"
      ? setValue((ps) => ({ ...ps, experiencePosition: event.target.value }))
      : event.target.name === "duration"
      ? setValue((ps) => ({ ...ps, experienceDuration: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, experienceDescription: event.target.value }))
      : console.log("error to stre in Experience ");
  }
  function onChangeHandlerExperience1(event) {
    event.target.name === "institude"
      ? setValue((ps) => ({ ...ps, Experience1Institude: event.target.value }))
      : event.target.name === "position"
      ? setValue((ps) => ({ ...ps, Experience1Position: event.target.value }))
      : event.target.name === "duration"
      ? setValue((ps) => ({ ...ps, Experience1Duration: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({
          ...ps,
          Experience1Description: event.target.value,
        }))
      : console.log("error to stre in Experience1 ");
  }
  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <div>
        <h3>Experience Details</h3>
      </div>
      <hr />
      <div class="row">
        <div>
          <h4>Experience 1</h4>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="institude"
            value={value.experienceInstitude}
            onChange={(e) => {
              onChangeHandlerExperience(e);
            }}
            placeholder="Institude/Organisation"
            required
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            name="position"
            value={value.experiencePosition}
            onChange={(e) => {
              onChangeHandlerExperience(e);
            }}
            placeholder="Position"
            required
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="duration"
            value={value.experienceDuration}
            onChange={(e) => {
              onChangeHandlerExperience(e);
            }}
            placeholder="Duration"
            required
          />
        </div>

        <div class="col-1"></div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <input
              type="text"
              class="form-control"
              name="description"
              value={value.experienceDescription}
              onChange={(e) => {
                onChangeHandlerExperience(e);
              }}
              placeholder="Description"
              required
            />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div>
          <h4>Experience 2</h4>
        </div>
        <div class="col-1"></div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="institude"
            value={value.Experience1Institude}
            onChange={(e) => {
              onChangeHandlerExperience1(e);
            }}
            placeholder="Institude/Organisation"
            required
          />
        </div>
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            name="position"
            value={value.Experience1Position}
            onChange={(e) => {
              onChangeHandlerExperience1(e);
            }}
            placeholder="Position"
            required
          />
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            name="duration"
            value={value.Experience1Duration}
            onChange={(e) => {
              onChangeHandlerExperience1(e);
            }}
            placeholder="Duration"
            required
          />
        </div>

        <div class="col-1"></div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <input
              type="text"
              class="form-control"
              name="description"
              value={value.Experience1Description}
              onChange={(e) => {
                onChangeHandlerExperience1(e);
              }}
              placeholder="Description"
              required
            />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExperienceDetails;
