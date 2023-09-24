import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const event1 = await prisma.event.create({
    data: {
      title: "Evento 1",
      date_time: new Date(),
      type: "course",
      address: "Endereço 1",
      description: "Descrição do Evento 1",
      online: false,
      free: true,
      price: "0",
      thumbnail: "imagem1.jpg",
      banner: "banner1.jpg",
      hosted_by: {
        create: {
          name: "Host 1",
          email: "host1@example.com",
        },
      },
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: "Evento 2",
      date_time: new Date(),
      type: "class",
      address: "Endereço 2",
      description: "Descrição do Evento 2",
      online: true,
      free: false,
      price: "50,00",
      thumbnail: "imagem2.jpg",
      banner: "banner2.jpg",
      hosted_by: {
        create: {
          name: "Host 2",
          email: "host2@example.com",
        },
      },
    },
  });

  const event3 = await prisma.event.create({
    data: {
      title: "Evento 3",
      date_time: new Date(),
      type: "lecture",
      address: "Endereço 3",
      description: "Descrição do Evento 3",
      online: false,
      free: true,
      price: "0",
      thumbnail: "imagem3.jpg",
      banner: "banner3.jpg",
      hosted_by: {
        create: {
          name: "Host 3",
          email: "host3@example.com",
        },
      },
    },
  });

  const event4 = await prisma.event.create({
    data: {
      title: "Evento 4",
      date_time: new Date(),
      type: "mentoring",
      address: "Endereço 4",
      description: "Descrição do Evento 4",
      online: true,
      free: false,
      price: "199,90",
      thumbnail: "imagem4.jpg",
      banner: "banner4.jpg",
      hosted_by: {
        create: {
          name: "Host 4",
          email: "host4@example.com",
        },
      },
    },
  });

  const event5 = await prisma.event.create({
    data: {
      title: "Evento 5",
      date_time: new Date(),
      type: "course",
      address: "Endereço 5",
      description: "Descrição do Evento 5",
      online: true,
      free: true,
      price: "0",
      thumbnail: "imagem5.jpg",
      banner: "banner5.jpg",
      hosted_by: {
        create: {
          name: "Host 5",
          email: "host5@example.com",
        },
      },
    },
  });

  const admin1 = await prisma.user.create({
    data: {
      name: "Admin 1",
      email: "admin1@example.com",
      password: "$2b$05$BvWFfEec36FfTSj9mVSPE./ZGOkIcxOeIyg5EGFnq4v.fnOGZCDX.",
      role: "admin",
      favorites: {
        create: [
          {
            title: "Evento Favorito 1",
            date_time: new Date(),
            type: "course",
            address: "Endereço 1",
            description: "Descrição do Evento 1",
            online: false,
            free: true,
            price: "0",
            thumbnail: "imagem1.jpg",
            banner: "banner1.jpg",
            hosted_by: {
              connect: {
                email: "host1@example.com",
              },
            },
          },
          {
            title: "Evento Favorito 2",
            date_time: new Date(),
            type: "class",
            address: "Endereço 2",
            description: "Descrição do Evento 2",
            online: true,
            free: false,
            price: "0",
            thumbnail: "imagem2.jpg",
            banner: "banner2.jpg",
            hosted_by: {
              connect: {
                email: "host2@example.com",
              },
            },
          },
        ],
      },
    },
  });

  const user1 = await prisma.user.create({
    data: {
      name: "Usuário 1",
      email: "user1@example.com",
      password: "senha123",
      role: "user",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Usuário 2",
      email: "user2@example.com",
      password: "senha456",
      role: "user",
    },
  });

  console.log("Usuários , Eventos e Hosts criados com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
