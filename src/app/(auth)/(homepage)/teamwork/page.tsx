import Equipes from "@/components/equipe";
import { db } from "../../../../../lib/db";

const TeamWorkPage = async () => {
  const users = await db.user.findMany({});
  const teamwork = await db.tB_Equipe.findMany({});
  const cards = await db.tB_Card.findMany({});
  return (
    <div>
      <Equipes Users={users} Equipe={teamwork} Cards={cards} />
    </div>
  );
};

export default TeamWorkPage;
