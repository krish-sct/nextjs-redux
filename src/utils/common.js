export const templateData = [
  {
    tag: "input",
    type: "text",
    key: "header",
    value: "Accessing cameras in OpenCV with high performance",
    description: "",
    placeholder: "Enter the Header data",
    min: 5,
    max: 100,
    isRequired: true,
    isActive: true,
  },
  {
    tag: "input",
    type: "text",
    key: "subTitle",
    value: "by Dilip Kumar J - Camera Team Posted on 24th Aug 2018",
    description: "",
    placeholder: "Enter the Sub-Title data",
    min: 5,
    max: 100,
    isRequired: true,
    isActive: true,
  },
  {
    tag: "input",
    type: "text",
    key: "title",
    value: "Introduction",
    description: "",
    placeholder: "Enter the Title data",
    min: 5,
    max: 100,
    isRequired: true,
    isActive: true,
  },
  {
    tag: "textarea",
    type: "text",
    key: "description",
    value:
      "This article gives a comprehensive method to build OpenCV 3.3.1 with many features and optimizations enabled. A sample application source code which allows the users to access V4L2 camera devices and use OpenCV operations with high performance is also given.",
    description: "",
    placeholder: "Enter the Description data",
    min: 5,
    max: 300,
    isRequired: true,
    isActive: true,
  },
  {
    tag: "input",
    type: "text",
    key: "title",
    value: "OpenCV Version",
    description: "",
    placeholder: "Enter the Title data",
    min: 5,
    max: 100,
    isRequired: true,
    isActive: true,
  },
  {
    tag: "textarea",
    type: "text",
    key: "description",
    value:
      "After testing multiple versions of OpenCV starting from 2.4.9 up to 3.4.2 for the Jetson TX1/TX2 it was found that any version of OpenCV above 3.2.0 runs much faster on the Jetson platform. This is because ARM optimizations for OpenCV done by Nvidia have been integrated into the 3.2.0 branch and higher versions. This was earlier available for download only as a prebuilt binary called as opencv4tegra. The list of APIs that are optimized are documented here.",
    description: "",
    placeholder: "Enter the Description data",
    min: 5,
    max: 300,
    isRequired: true,
    isActive: true,
  },
  {
    key: "htmlEditor",
    value: "<p>html editor</p>",
    isRequired: true,
    isActive: true,
    placeholder: "Enter the HTML code here",
  },
];
export const handleDate = (date) => {
  let data = new Date(date);
  return data.toLocaleString();
};