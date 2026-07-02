import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [githubRes, twitterRes] = await Promise.allSettled([
      fetch(`https://api.github.com/users/karmatheHacker`, {
        next: { revalidate: 3600 },
      }).then((res) => res.json()),
      fetch(`https://api.fxtwitter.com/karmaisgoatt`, {
        next: { revalidate: 3600 },
      }).then((res) => res.json()),
    ]);

    const githubData = githubRes.status === "fulfilled" ? githubRes.value : {};
    const twitterData =
      twitterRes.status === "fulfilled" ? twitterRes.value?.user || {} : {};

    const response = NextResponse.json({
      github: {
        name: githubData.name || githubData.login || "Rabindranath Chatterjee",
        username: githubData.login || "karmatheHacker",
        avatar:
          githubData.avatar_url || "https://github.com/karmatheHacker.png",
        bio:
          githubData.bio ||
          "I work on AI, LLMs, and building developer tools on top of them",
        location: githubData.location || "Guwahati, Assam, India",
        stats: [
          { label: "Repositories", value: githubData.public_repos || 60 },
          { label: "Followers", value: githubData.followers || 180 },
        ],
      },
      twitter: {
        name: twitterData.name || "Karma",
        username: twitterData.screen_name || "karmaisgoatt",
        avatar:
          twitterData.avatar_url?.replace("_normal", "") ||
          "https://github.com/karmatheHacker.png",
        banner:
          twitterData.banner_url ||
          "",
        bio: twitterData.description || "Aspiring AI Engineer",
        location: twitterData.location || "Bangalore, India",
        stats: [
          { label: "Following", value: typeof twitterData.following === "number" ? twitterData.following : 50 },
          { label: "Followers", value: typeof twitterData.followers === "number" ? twitterData.followers : 0 },
        ],
      },
      linkedin: {
        name: "Rabindranath chatterjee",
        username: "",
        avatar: "https://github.com/karmatheHacker.png",
        banner: "",
        bio: "",
        location: "Bengaluru, Karnataka, India",
        stats: [{ label: "connections", value: "2" }],
      },
      discord: {
        name: "King",
        username: "rabin2253",
        avatar: "https://cdn.discordapp.com/avatars/559337122134491141/e8ed68b5df5b53981a2c014e95183fc0.png",
        bio: "",
        location: "",
        stats: [],
      },
      instagram: {
        name: "Lutera-Rabin",
        username: "aether__dev",
        avatar: "https://scontent.cdninstagram.com/v/t51.82787-19/657563653_18046175597768295_5654046818669954062_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=UIbQxbVnoDIQ7kNvwEf7ftZ&_nc_oc=Adoy5yDmsaR5JjE34cQgehkxPARkTHGuz-c_RN5_-RQPa7DzSnwQ89BRp3AZIi_C6xPxdalON_y-1Of-nTs23_hJ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=6kzXejclHj4JHuZ--tG2Zw&_nc_ss=7f60f&oh=00_AQASF43BHzzqZZJxLBlu2i9PBcpVOLdkUKHoMRJzrhe7ew&oe=6A4C100F",
        bio: "Life is all about consequences",
        location: "",
        stats: [
          { label: "posts", value: "3" },
          { label: "followers", value: "94" },
        ],
      },
    });
    response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");
    return response;
  } catch (error) {
    const errorResponse = NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
    errorResponse.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");
    return errorResponse;
  }
}
