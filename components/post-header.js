import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderTop: "1px solid #8ADDFF",
        borderBottom: "1px solid #8ADDFF",
        padding: "2rem 0",
        width: 
      }}
    >
      <text style={{ fontSize: "3rem", fontWeight: "bold" }}>{title}</text>
      <DateFormatter dateString={date} />

      {/* <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div> */}
    </div>
  );
}
