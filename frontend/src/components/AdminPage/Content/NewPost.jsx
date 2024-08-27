import React from "react";
import { Grid, Paper } from "@mui/material";
import { PhotoIcon } from "@heroicons/react/24/solid";

const NewPost = () => {
  return (
    <Grid
      container
      height={"100%"}
      justifyContent={"center"}
      alignItems={"start"}
    >
      <Paper
        elevation={0}
        sx={{
          width: { xs: "100%", lg: "60%" },
          height: "auto",
        }}
      >
        <div className="flex flex-1 flex-col justify-center px-6 pb-5 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add New Post
            </h2>
          </div>

          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    required
                    autoComplete="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="text"
                    name="text"
                    type="text"
                    required
                    autoComplete="current-text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
               
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default NewPost;
