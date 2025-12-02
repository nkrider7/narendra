import React from "react";

const GithubShowcase = () => {
  const username = "nkrider7";

  return (
    <div
      style={{
        backgroundColor: "#111111",

        padding: "40px 20px",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
     

      {/* Activity Graph */}
      <div className="flex flex-col md:flex-col items-center gap-6 mt-8">
        {/* <img
            src={`https://github.com/${username}.png`}
            alt="GitHub Avatar"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "20px",
              border: "3px solid #8200e2",
            }}
          /> */}

        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=high-contrast&hide_border=true&area=true&area_color=000000&bg_color=111111&color=ffffff&line=8200e2&point=8200e2`}
          alt="GitHub Contribution Graph"
          style={{
            width: "100%",
            borderRadius: "20px",
            border: "1px solid #2a2a2a",
          }}
        />
      </div>

     
      
    </div>
  );
};

export default GithubShowcase;
