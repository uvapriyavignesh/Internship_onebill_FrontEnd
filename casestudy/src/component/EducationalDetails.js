import React, { useEffect } from "react";

function EducationalDetails(props) {
  let [value, setValue] = props.stateContainer;
  function onCLickHandlerEdu(event) {
    event.target.name === "university"
      ? setValue((ps) => ({ ...ps, university: event.target.value }))
      : event.target.name === "qualification"
      ? setValue((ps) => ({
          ...ps,
          universityQualification: event.target.value,
        }))
      : event.target.name === "startdate"
      ? setValue((ps) => ({ ...ps, universityStartdate: event.target.value }))
      : event.target.name === "enddate"
      ? setValue((ps) => ({ ...ps, universityEnddate: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, universityDescription: event.target.value }))
      : console.log("Error storing Education details");
  }
  function onCLickHandlerSch(event) {
    event.target.name === "school"
      ? setValue((ps) => ({ ...ps, school: event.target.value }))
      : event.target.name === "qualification"
      ? setValue((ps) => ({
          ...ps,
          schoolQualification: event.target.value,
        }))
      : event.target.name === "startdate"
      ? setValue((ps) => ({ ...ps, schoolStartdate: event.target.value }))
      : event.target.name === "enddate"
      ? setValue((ps) => ({ ...ps, schoolEnddate: event.target.value }))
      : event.target.name === "description"
      ? setValue((ps) => ({ ...ps, schoolDescription: event.target.value }))
      : console.log("Error storing Education details");
  }
  useEffect(() => {
    console.log(value);
  });
  return (
    <div>
      <div>
        <h3>Personal Details</h3>
      </div>
      <hr />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <form>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="university"
                  value={value.university}
                  onChange={(e) => {
                    onCLickHandlerEdu(e);
                  }}
                  placeholder="University/College *"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="qualification"
                  placeholder="Qualification *"
                  value={value.universityQualification}
                  onChange={(e) => {
                    onCLickHandlerEdu(e);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="startdate"
                      placeholder="start dd/mm/yy"
                      value={value.universityStartdate}
                      onChange={(e) => {
                        onCLickHandlerEdu(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="enddate"
                      placeholder="end dd/mm/yyyy"
                      value={value.universityEnddate}
                      onChange={(e) => {
                        onCLickHandlerEdu(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="row">
              <div class="col-11">
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        placeholder="description *"
                        value={value.universityDescription}
                        onChange={(e) => {
                          onCLickHandlerEdu(e);
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <form>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="school"
                  value={value.school}
                  onChange={(e) => {
                    onCLickHandlerSch(e);
                  }}
                  placeholder="school *"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="qualification"
                  placeholder="Qualification *"
                  value={value.schoolQualification}
                  onChange={(e) => {
                    onCLickHandlerSch(e);
                  }}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="startdate"
                      placeholder="start dd/mm/yy"
                      value={value.schoolStartdate}
                      onChange={(e) => {
                        onCLickHandlerSch(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-5">
              <form>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      name="enddate"
                      placeholder="end dd/mm/yyyy"
                      value={value.schoolEnddate}
                      onChange={(e) => {
                        onCLickHandlerSch(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="row">
              <div class="col-11">
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        placeholder="description *"
                        value={value.schoolDescription}
                        onChange={(e) => {
                          onCLickHandlerSch(e);
                        }}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalDetails;
