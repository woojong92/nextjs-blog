import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        width: "100%" /* 가로 전체 영역 */,
        height: "80px",
        // backgroundColor: "#252525",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "680px",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "pink",
        }}
      >
        <h2>
          <Link href="/">
            <a
              style={{ color: "#8ADDFF", fontWeight: "bold", fontSize: "2rem" }}
            >
              woody.blog
            </a>
          </Link>
        </h2>
        {/* <h2>hh</h2> */}
      </div>
    </div>
  );
}
