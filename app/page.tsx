import { MemoryGame } from "@/components/memory-game"

export default function Home() {
  return (
    <main className="">
      <MemoryGame showInstructionsOnLoad={true} />
    </main>
  )
}
