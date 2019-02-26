import  { prisma } from './generated/prisma-client';
// 一个main函数，以便我们可以使用async/await
async function main() {
  // 新建一个user，并新建一个post文章
  const newUser = await prisma
    .createUser({
      name: "Alice",
      posts: {
        create: {
          title: "The data layer for modern apps",
        }
      },
    })
  console.log("Created new user: ${newUser.name} (ID: ${newUser.id})")
  // 从数据库中读取所有用户user并将其打印到控制台
  const allUsers = await prisma.users()
  console.log(allUsers)
  // 从数据库中读取所有文章post并将其打印到控制台
  const allPosts = await prisma.posts()
  console.log(allPosts)
}
main().catch(e => console.error(e))