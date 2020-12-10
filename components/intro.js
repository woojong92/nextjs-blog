import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section
      style={{
        // backgroundColor: "pink",
        display: "flex",
        width: "100%",
        borderBottom: "1px solid #8ADDFF",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: "2rem 1rem",
        marginBottom: "2rem",
      }}
    >
      <img
        style={{
          width: 128,
          height: 128,
          backgroundColor: "#8ADDFF",
          borderRadius: "50%",
          marginRight: "2rem",
          // border: "1px solid #8ADDFF",
        }}
        src="/assets/blog/authors/woody_character.jpeg"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: 20, fontWeight: "bold" }}>woody</p>
        <p>안녕하세요. 개발자 우디입니다.</p>
      </div>
    </section>
  );
}
