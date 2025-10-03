import {client} from "@repo/db/client";

export default async function Home() {
  // const user = await client.user.findFirst();
  // return (
  //   <div>
  //     3wdwindiowjdfowjqdfwpozj
  //     {user?.username}
  //     {user?.password}
  //   </div>
  // );
  const users = await client.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}