"use client";
import { HiUserGroup } from "react-icons/hi2";
import { Button } from "../ui/button";
import { players } from "@/lib/constant";
const PlayersList = () => {
  return (
    <main className="flex flex-col gap-6 my-5 px-10 mx-auto ">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-neutral-900">Players</h1>
        <div className="flex gap-2 items-center">
          <HiUserGroup className="text-2xl text-neutral-900" />
          <span className="text-2xl text-neutral-900">{players.length}/11</span>
        </div>
      </header>
      {/* Players List */}
      <section className="flex flex-col gap-3">
        {players.map((player, index) => (
          <article
            key={index}
            className="flex justify-between items-center p-4 rounded-2xl bg-[#34735F]"
          >
            <div className="flex gap-4 items-center">
              {/* Player Initials */}
              <div className="w-12 h-12 text-lg font-bold bg-orange-100 rounded-full text-slate-600 flex items-center justify-center">
                {player.initials}
              </div>
              <h2 className="text-xl text-orange-100">
                {player.name}
                {player.isHost && (
                  <span className="text-base ml-2">(Host)</span>
                )}
              </h2>
            </div>
            <Button
              className="flex items-center gap-2 px-4 py-7 bg-white rounded-xl text-neutral-900 hover:bg-gray-100 cursor-pointer"
              aria-label={`Message ${player.name}`}
            >
              Message
            </Button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default PlayersList;
