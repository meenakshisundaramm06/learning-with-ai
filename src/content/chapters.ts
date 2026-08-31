import type { Chapter, EvidenceCardData, ThreadEdge } from "../types";

export const BOARD_WIDTH = 2400;
export const BOARD_HEIGHT = 1700;

export const chapters: readonly Chapter[] = [
  {
    id: "overview",
    caseNumber: "BOARD 00",
    title: "The learning case",
    timeRange: "ORIENTATION",
    durationMinutes: 0,
    evidenceCaseIndex: null,
    camera: { focusCardId: null, zoom: 0.94 },
    boardLine: "Eight clues. One question: how does material become capability?",
    deliveryCue: "Start slowly. This should feel like you are inviting them into a question you genuinely have.",
    speakerNotes: [
      {
        kind: "do",
        text: "Pause for three seconds. Let everyone scan the full board.",
      },
      {
        kind: "say",
        text: "So, this whole board is really one question I've been trying to answer for myself. We have more courses, videos, articles and AI explanations than we've ever had. We can learn almost anything, at almost any time. But somehow that hasn't automatically made us better at the things we want to do.",
      },
      {
        kind: "say",
        text: "The question behind every card here is simple: what actually turns all of that material into a capability? Not something I watched. Not something I understood while someone was explaining it. Something I can actually use when the explanation is gone.",
      },
      {
        kind: "say",
        text: "I'm going to follow these clues one by one. And I'm starting with the part of this board that looks uncomfortably familiar to me.",
      },
      {
        kind: "do",
        text: "Advance to Case 01.",
      },
    ],
    nextReveal: "Begin with the pile of material.",
  },
  {
    id: "material",
    caseNumber: "CASE 01",
    title: "The pile of material",
    timeRange: "00:00–04:00",
    durationMinutes: 4,
    evidenceCaseIndex: 0,
    camera: { focusCardId: "material-pile", zoom: 1.42 },
    boardLine: "Material is abundant. Capability is not.",
    deliveryCue: "Own the problem. You are a fellow learner, not an expert diagnosing everyone else.",
    speakerNotes: [
      {
        kind: "say",
        text: "This is my actual situation. I wanted to learn React. So I did what most of us do: I found a course, saved a few videos, bookmarked articles, and kept adding useful-looking links whenever I saw them.",
      },
      {
        kind: "say",
        text: "After a while, I had a pretty good collection. But if you had closed all those tabs and asked me to build something, I still couldn't do much. I was spending time around React, but my ability hadn't really changed. And I think that difference matters: collecting changes what I have access to; learning has to change what I can do.",
      },
      {
        kind: "say",
        text: "Then I tried to make it practical. I thought, okay, I'll build an accessible filter panel. That's a real outcome. But while building it, I was trying to understand components, props, state, JavaScript array methods, events and accessibility at the same time. Every small problem opened five more problems. It became exhausting very quickly.",
      },
      {
        kind: "say",
        text: "At some point I started telling myself maybe I wasn't interested enough, or maybe coding just wasn't for me. But looking back, I don't think that was the real issue. When an activity gives you confusion again and again, with very little sense of progress, of course your brain starts avoiding it. What looks like procrastination can sometimes be a badly designed learning process.",
      },
      {
        kind: "say",
        text: "And this isn't only about code. It could be product strategy, research, motion design, finance—anything outside the skills we already use comfortably. We can collect a lot and still remain at the same starting point.",
      },
      {
        kind: "do",
        text: "Ask in chat: “What is one skill you've collected material for, but still can't use confidently?” Read two or three replies.",
      },
      {
        kind: "say",
        text: "So that's the problem I want to solve today. AI and the internet give us more material. What kind of learning process turns that material into capability?",
      },
    ],
    nextReveal: "If access is not enough, what does one-to-one support add?",
  },
  {
    id: "tutoring",
    caseNumber: "CASE 02",
    title: "The tutoring opportunity",
    timeRange: "04:00–09:00",
    durationMinutes: 5,
    evidenceCaseIndex: 1,
    camera: { focusCardId: "bloom-chart", zoom: 1.14 },
    boardLine: "A tutor manages the learning loop—not just the explanation.",
    deliveryCue: "Let the number create curiosity, then explain the mechanism. Do not oversell the study or AI.",
    speakerNotes: [
      {
        kind: "say",
        text: "This graph is what pulled me into this topic. In 1984, an educational psychologist called Benjamin Bloom compared ordinary classroom teaching with one-to-one tutoring. In his study, the average student who received tutoring performed better than 98 percent of the students in the conventional class.",
      },
      {
        kind: "do",
        text: "Pause on the graph for two seconds.",
      },
      {
        kind: "say",
        text: "Now, I want to be careful with this. This graph doesn't mean every tutor produces that result, and it definitely doesn't mean opening ChatGPT gives us a two-sigma improvement. Later research found smaller effects in different settings. So I'm not using this as an AI promise. I'm using it as a design question: what changes when learning can respond to one person?",
      },
      {
        kind: "do",
        text: "Ask in chat: “Think of a good teacher or mentor. What did they change besides the explanation?” Give them thirty seconds and read two replies.",
      },
      {
        kind: "say",
        text: "At first I thought the answer was obvious: a tutor explains things better. But that is only one part. A good tutor can see where I am trying to go. They can see what I can already do. They can watch my attempt, notice the exact gap, choose a smaller next task, and then check whether I can do it without help. The explanation sits inside a loop.",
      },
      {
        kind: "say",
        text: "That loop is very different from watching a video. A video has to continue whether I understood the last minute or not. A course usually follows the same path for everyone. A tutor can stop, go backwards, change the example, or tell me that the problem I'm trying to solve is three steps ahead of my current level.",
      },
      {
        kind: "say",
        text: "This is where AI becomes interesting to me. It is available when I am stuck at eleven at night. I can ask the same question again without feeling embarrassed. I can ask for an example from design instead of mathematics. And, most importantly, I can show it my attempt rather than only asking for another explanation.",
      },
      {
        kind: "say",
        text: "But AI doesn't automatically become a tutor. If I ask for the finished answer, it will usually give me one. It doesn't truly know my level. It may choose a bad sequence. It may confidently teach something wrong. So I have to design the relationship: understand my goal, inspect my attempt, find one gap, give me one next task, and check again.",
      },
      {
        kind: "say",
        text: "The useful idea here is not ‘AI can explain anything.’ We already had explanations. The useful idea is: AI can help us run a responsive learning loop—if we stop using it only as an answer machine.",
      },
    ],
    nextReveal: "The support also has to change as the learner changes.",
  },
  {
    id: "stages",
    caseNumber: "CASE 03",
    title: "Support changes with the learner",
    timeRange: "09:00–13:00",
    durationMinutes: 4,
    evidenceCaseIndex: 2,
    camera: { focusCardId: "talent-stages", zoom: 1.34 },
    boardLine: "Explore. Build. Refine.",
    deliveryCue: "Tell the sports story like a story, not like a framework. Give them ten quiet seconds at the end.",
    speakerNotes: [
      {
        kind: "say",
        text: "There is another part of Bloom's work that I found useful. The kind of support a person needs changes as they get better. That sounds obvious, but we often use one learning method for every stage.",
      },
      {
        kind: "say",
        text: "In the early stage, the goal is interest. Children are allowed to play, explore and enjoy the activity. The teacher gives a lot of encouragement. Nobody starts by saying, ‘Here are the twelve technical mistakes in your tennis serve.’ First, the child has to want to keep playing.",
      },
      {
        kind: "say",
        text: "Then the relationship changes. The tennis player becomes serious. Now they need precision, technique, repetition, strategy and direct correction. The coach becomes more demanding because the learner is trying to make the basics reliable, not just stay interested.",
      },
      {
        kind: "say",
        text: "And much later, when the athlete is already excellent, the coach is no longer teaching basic technique. They are refining tiny tactical choices and helping the athlete develop their own style. In Bloom's examples, the same pattern appeared with mathematicians: eventually they were trying to solve problems nobody had solved before.",
      },
      {
        kind: "say",
        text: "I can see the same three stages in our work. When I first explore code, I need to see what is possible and make a few small things. When I become serious, I need to practise components, state, events and debugging until they stop feeling fragile. Much later, architecture and personal judgment become the important part.",
      },
      {
        kind: "say",
        text: "Problems happen when the stage and the learning method don't match. Give an open-ended project to a beginner, and they drown in choices. Give beginner exercises to someone experienced, and they get bored. Neither reaction tells us that the person is bad at learning. The task is simply wrong for their stage.",
      },
      {
        kind: "do",
        text: "Ask everyone to choose: “For the skill you picked, are you exploring, building foundations, or refining?” Put one word in chat. Name the spread you see without discussing every answer.",
      },
      {
        kind: "say",
        text: "Keep that stage in mind, because it changes what a useful next task looks like.",
      },
    ],
    nextReveal: "My React project and my foundations were at different stages.",
  },
  {
    id: "bottleneck",
    caseNumber: "CASE 04",
    title: "Why large goals overwhelm us",
    timeRange: "13:00–18:00",
    durationMinutes: 5,
    evidenceCaseIndex: 3,
    camera: { focusCardId: "memory-bottleneck", zoom: 1.16 },
    boardLine: "Keep the ambition. Reduce the height of the next step.",
    deliveryCue: "Use the workbench as a plain explanation, not a neuroscience lecture.",
    speakerNotes: [
      {
        kind: "say",
        text: "This is where my React example started making sense. Building an accessible filter panel was a useful destination. But it was a terrible first exercise for me.",
      },
      {
        kind: "say",
        text: "The simplest way I understand the problem is this: working memory is like a small workbench. It is the space where we hold unfamiliar pieces while we are trying to arrange them. And the workbench is small. If I put too many new pieces on it, they start falling off.",
      },
      {
        kind: "say",
        text: "For that filter panel, the pieces were component structure, props, state, array methods, events and accessibility. None of them was impossible by itself. The problem was that I was trying to think about all of them at once. There was no space left to reason about the actual design problem.",
      },
      {
        kind: "do",
        text: "Ask: “For the skill you chose, how many unfamiliar pieces are you currently combining—two, five, ten?” Let a few numbers appear in chat.",
      },
      {
        kind: "say",
        text: "We already know this feeling as designers. Think about the first time you used a complex design tool. When every shortcut and every panel is unfamiliar, even a simple design decision feels tiring. Later, the tool disappears into the background. Your attention becomes available for hierarchy, interaction and judgment.",
      },
      {
        kind: "say",
        text: "That is what foundations do. A familiar move takes less conscious effort. Once rendering a list or passing a prop becomes ordinary, I can spend my limited attention on filter behaviour and accessibility. The foundation doesn't replace the higher-level work. It creates room for it.",
      },
      {
        kind: "say",
        text: "This is why starting with the full project can be misleading. We think we are being practical, but we may be combining six lessons into one task. Then when we struggle, we blame motivation or talent instead of the size of the step.",
      },
      {
        kind: "do",
        text: "Point to the large step and then the small staircase.",
      },
      {
        kind: "say",
        text: "Both staircases reach the same height. Making the next step smaller doesn't make the goal less ambitious. It makes progress possible. And people who skip the foundations don't really escape them. They usually meet them later, in the middle of a harder problem, with much worse timing.",
      },
      {
        kind: "say",
        text: "So I don't need to throw away the filter panel. I need to keep the destination and change the next step. The next question is: how do I find that step?",
      },
    ],
    nextReveal: "A prerequisite map shows which smaller step comes next.",
  },
  {
    id: "map",
    caseNumber: "CASE 05",
    title: "Map the path",
    timeRange: "18:00–24:00",
    durationMinutes: 6,
    evidenceCaseIndex: 4,
    camera: { focusCardId: "knowledge-graph", zoom: 1.08 },
    boardLine: "Plan backwards. Learn forwards.",
    deliveryCue: "Trace the path slowly. Let the React example do most of the explaining.",
    speakerNotes: [
      {
        kind: "say",
        text: "A course usually gives us a container: these are the lessons, and this is the order. That can be useful. But when I already have a specific outcome, I need something slightly different. I need a map of what that outcome depends on.",
      },
      {
        kind: "say",
        text: "So I put the outcome on the right: build an accessible filter panel. Then I work backwards. What has to be true for that panel to work? I need to render options from data. I need filter logic. I need state. I need labels and keyboard behaviour. And each of those may depend on something smaller.",
      },
      {
        kind: "do",
        text: "Trace from “accessible panel” backwards through two or three prerequisite arrows.",
      },
      {
        kind: "say",
        text: "The point isn't to produce a perfect map. The point is to make the hidden structure visible. ‘Learn React’ feels like one task, but it is really a network of capabilities. Once I can see the network, I don't have to learn the whole field before doing anything useful. I only need the prerequisites that sit on my path.",
      },
      {
        kind: "say",
        text: "Then I mark what I can genuinely do. Not what I remember seeing. Not what looks familiar. What I can do on a fresh task without copying. In this example, maybe I can make components and write basic JavaScript arrays. Maybe I understand labels. But I still can't pass data cleanly through props.",
      },
      {
        kind: "say",
        text: "That first missing capability is what I'm calling the frontier. It isn't the biggest gap on the map. It's the first thing I can't yet do, even though the steps before it are already in place. That makes it a good next task: new enough to change my ability, but small enough for me to work on now.",
      },
      {
        kind: "say",
        text: "That gives me a simple rule. I plan backwards from the outcome, because the outcome tells me what matters. But I learn forwards from the first missing step, because that is the order in which I can actually learn it.",
      },
      {
        kind: "do",
        text: "Give them thirty seconds: “Picture your outcome on the right. What is one box immediately before it?” Invite one quick answer.",
      },
      {
        kind: "say",
        text: "AI can help draft this map very quickly. I can give it my outcome, show it one or two things I've built, and ask it to suggest the steps. But the map is only a first guess. AI might assume I know something I don't. It might add things I don't need, or miss an accessibility requirement.",
      },
      {
        kind: "say",
        text: "The test is always the attempt. If a node still feels overwhelming, split it. If I keep failing for the same hidden reason, add the missing prerequisite. The map gets better as it meets evidence from my work.",
      },
      {
        kind: "say",
        text: "Now I have a route and a reasonable next task. But a map still doesn't create a capability. I have to do something with it.",
      },
    ],
    nextReveal: "The map chooses the task. Practice turns it into capability.",
  },
  {
    id: "practice",
    caseNumber: "CASE 06",
    title: "How capability forms",
    timeRange: "24:00–31:00",
    durationMinutes: 7,
    evidenceCaseIndex: 5,
    camera: { focusCardId: "practice-loop", zoom: 1.05 },
    boardLine: "Attempt → feedback → correction → fresh proof.",
    deliveryCue: "Keep returning to one question: what changed in the learner, not just in the output?",
    speakerNotes: [
      {
        kind: "say",
        text: "A map tells me what to learn next. But it still doesn't teach me. For that, something has to change in me. The basic process is quite simple: I try, the attempt shows me something, I correct it, and then I try again.",
      },
      {
        kind: "say",
        text: "This is what active learning means here. It doesn't mean dropping a beginner into a large project and saying, ‘Figure it out.’ A clear explanation and a worked example can be very useful. But then the help has to fade, and I have to do it myself.",
      },
      {
        kind: "say",
        text: "Suppose my frontier skill is rendering a list from data. First, I get the minimum explanation and one small example. Not a twenty-minute tour of React—just enough to understand what the data looks like, what map does, and why each item needs a key.",
      },
      {
        kind: "say",
        text: "Then I attempt a different list. Maybe a list of filter categories. I don't copy the finished example. I write it myself. That attempt is important because it produces evidence. It shows whether my real gap is array syntax, JSX, props, or something else.",
      },
      {
        kind: "say",
        text: "Now AI has a useful role. Instead of asking, ‘Give me the correct code,’ I can say, ‘Look at my attempt. Don't rewrite it. Tell me the one gap that is causing most of the problem, and give me a smaller correction task.’ That keeps the feedback attached to my actual work.",
      },
      {
        kind: "say",
        text: "After the correction, I need fresh proof. Give me a different array with different names and ask me to render it without looking back. If I can only reproduce the original example, I may have memorised its shape. A fresh task checks whether I can actually use the idea.",
      },
      {
        kind: "say",
        text: "Then I return later. This matters because something can feel easy while it is still sitting in my head. Tomorrow, or three days later, the reference is gone. Can I still recognise the problem and remember what to do? That return is part of learning. It isn't an optional review after the learning is finished.",
      },
      {
        kind: "do",
        text: "Move through the loop on screen: explanation → attempt → feedback → correction → fresh proof → return.",
      },
      {
        kind: "do",
        text: "Ask in chat: “Which part of this loop do you usually skip?” Pause, then point out the common pattern in the replies.",
      },
      {
        kind: "say",
        text: "AI can make this loop fast. It can generate examples, inspect an attempt and create a new task in seconds. But it can also quietly remove the whole loop. If it writes the component before I try, the output improves while I remain the same. I feel productive because something works, but I haven't built a capability I can carry into the next problem.",
      },
      {
        kind: "say",
        text: "So my rule is: use the guide when I need it, then close it and reproduce the move. If I get stuck, I peek at the smallest missing piece, close it again, and continue. I don't count ‘AI explained it’ as learning. I count what I can do when the explanation is no longer on the screen.",
      },
      {
        kind: "say",
        text: "We have the whole loop now. Let us use it to make one real next step for a skill you actually care about.",
      },
    ],
    nextReveal: "Now the audience will build the first version for a real skill.",
  },
  {
    id: "activity",
    caseNumber: "CASE 07",
    title: "Build your learning frontier",
    timeRange: "31:00–43:00",
    durationMinutes: 12,
    evidenceCaseIndex: 6,
    camera: { focusCardId: "activity-card", zoom: 1.52 },
    boardLine: "Leave with a next task, not another resource list.",
    deliveryCue: "Protect the work time. Read the instructions slowly, then stop talking while they work.",
    speakerNotes: [
      {
        kind: "say",
        text: "Now I want us to leave with something usable. Not another list of resources—a next task. Pick one skill you genuinely want to expand into. It can be code, product management, research, motion, data, facilitation—anything real for you.",
      },
      {
        kind: "say",
        text: "First, turn it into something you can do and show. ‘Learn React’ is a field, so it is hard to plan. ‘Use React to build an accessible filter panel’ is something I can see and test. Write one sentence that starts with: I want to be able to…",
      },
      {
        kind: "do",
        text: "Give them one minute. Start the timer. After forty-five seconds, say: “Make the outcome something you could show or test.”",
      },
      {
        kind: "say",
        text: "Next, ask AI to draft a small prerequisite map—about six to eight capabilities. Tell it your outcome and your current experience. Ask it no more than three questions. Then ask it to mark each item as: I can do this, this is my frontier, or this is still locked behind another prerequisite.",
      },
      {
        kind: "say",
        text: "You can use this wording: ‘Help me map the capabilities needed for this outcome. Ask me up to three questions. Give me six to eight small nodes. Mark what I can probably do, the first useful gap, and what is still locked. State what you are least certain about.’",
      },
      {
        kind: "do",
        text: "Give them three minutes. With one minute left, say: “You only need a rough map. Do not make it complete.”",
      },
      {
        kind: "say",
        text: "Now challenge the map. AI has made guesses about you. Look for a node marked ‘can do’ that you have never proved. Look for a node that is still too broad. Look for a hidden prerequisite. If you know the domain well enough to disagree, correct it. The map is a draft, not an authority.",
      },
      {
        kind: "do",
        text: "Give them two minutes. After one minute, say: “Your frontier is the first thing you cannot do whose prerequisites you can.”",
      },
      {
        kind: "say",
        text: "Last step: turn the frontier into proof. Ask for one tiny worked example, and then a different task you could complete in about twenty-five minutes. Tell the AI not to solve that task. Its job is to inspect your attempt, name one important gap, give you a correction task, and then give you fresh proof.",
      },
      {
        kind: "do",
        text: "Give them two minutes. With thirty seconds left, say: “Finish the sentence: My first proof task is…”",
      },
      {
        kind: "say",
        text: "If the AI is slow or the map is getting complicated, use six boxes. Put the outcome on the right. Work backwards. Mark the first box you are uncertain about. Then write one small task that would prove that box. That is enough for today.",
      },
      {
        kind: "do",
        text: "Ask everyone to post in chat: “My frontier skill is ___, and my first proof task is ___.” Read two or three aloud.",
      },
      {
        kind: "say",
        text: "Notice what we have now. Not a promise to learn something someday. A specific edge of our current ability, and one task that can move that edge.",
      },
    ],
    nextReveal: "Close by turning the plan into one dated return.",
  },
  {
    id: "commitment",
    caseNumber: "CASE 08",
    title: "The commitment",
    timeRange: "43:00–45:00",
    durationMinutes: 2,
    evidenceCaseIndex: 7,
    camera: { focusCardId: "closing-rule", zoom: 1.42 },
    boardLine: "Material becomes capability through evidence of use.",
    deliveryCue: "Slow down. The final line is the only line that should sound deliberately composed.",
    speakerNotes: [
      {
        kind: "say",
        text: "We started with a pile of courses, videos and links. There is nothing wrong with those resources. They are useful raw material. The mistake is treating possession of the material as evidence that learning happened.",
      },
      {
        kind: "say",
        text: "The shift I want to make is small. Instead of asking, ‘What should I consume next?’ I want to ask, ‘What should I be able to do next? What does it depend on? And what attempt would prove it?’",
      },
      {
        kind: "say",
        text: "That gives me the whole loop: map the outcome, shrink the next step, practise through attempts and correction, and return later to prove that the capability is still there. AI can make that loop faster and more personal. But the part that changes me is still the attempt.",
      },
      {
        kind: "do",
        text: "Ask them to put the 25-minute proof task on their calendar now. Wait quietly for fifteen seconds.",
      },
      {
        kind: "say",
        text: "I'm going to use this process for React. I hope you use it for whatever sits just outside your current practice. And I'll leave you with the simplest version of the idea: AI and the internet give us material. A deliberate learning loop turns that material into capability.",
      },
    ],
    nextReveal: "End the screen share.",
  },
] as const;

export function getChapter(index: number): Chapter {
  const chapter = chapters[index] ?? chapters[0];
  if (!chapter) throw new Error("The presentation must contain at least one chapter.");
  return chapter;
}

export function getChapterIndexForEvidenceCase(evidenceCaseIndex: number): number {
  const chapterIndex = chapters.findIndex(
    (chapter) => chapter.evidenceCaseIndex === evidenceCaseIndex,
  );
  if (chapterIndex < 0) {
    throw new Error(`Missing chapter for evidence case ${evidenceCaseIndex}.`);
  }
  return chapterIndex;
}

export const evidenceCards: readonly EvidenceCardData[] = [
  {
    id: "material-pile",
    caseIndex: 0,
    x: 110,
    y: 120,
    width: 500,
    height: 350,
    depth: 90,
    rotation: -3,
    visual: "material-pile",
    eyebrow: "Exhibit A",
    heading: "The material pile",
    ariaLabel: "Open case 1: the pile of saved learning material",
  },
  {
    id: "opening-question",
    caseIndex: 0,
    x: 620,
    y: 90,
    width: 610,
    height: 285,
    depth: 145,
    rotation: 2,
    visual: "question",
    eyebrow: "Unresolved",
    heading: "Why hasn't access changed what I can do?",
    ariaLabel: "Open case 1: the central learning question",
  },
  {
    id: "bloom-chart",
    caseIndex: 1,
    x: 650,
    y: 430,
    width: 650,
    height: 430,
    depth: 130,
    rotation: -1.5,
    visual: "bloom-chart",
    eyebrow: "Evidence 1984",
    heading: "The two-sigma question",
    ariaLabel: "Open case 2: Bloom's tutoring comparison",
  },
  {
    id: "tutor-contract",
    caseIndex: 1,
    x: 1330,
    y: 400,
    width: 470,
    height: 440,
    depth: 105,
    rotation: 2.2,
    visual: "tutor-contract",
    eyebrow: "Tutor protocol",
    heading: "What individual support changes",
    ariaLabel: "Open case 2: the tutor's six jobs",
  },
  {
    id: "talent-stages",
    caseIndex: 2,
    x: 1500,
    y: 80,
    width: 690,
    height: 300,
    depth: 85,
    rotation: 1.3,
    visual: "talent-stages",
    eyebrow: "Development record",
    heading: "Support changes with the learner",
    ariaLabel: "Open case 3: explore, build, and refine",
  },
  {
    id: "memory-bottleneck",
    caseIndex: 3,
    x: 1670,
    y: 870,
    width: 590,
    height: 410,
    depth: 125,
    rotation: -2,
    visual: "memory-bottleneck",
    eyebrow: "Constraint",
    heading: "The small workbench",
    ariaLabel: "Open case 4: the working-memory bottleneck",
  },
  {
    id: "staircase",
    caseIndex: 3,
    x: 1220,
    y: 940,
    width: 400,
    height: 305,
    depth: 165,
    rotation: 2.5,
    visual: "staircase",
    eyebrow: "Correction",
    heading: "Same height. Smaller steps.",
    ariaLabel: "Open case 4: the learning staircase",
  },
  {
    id: "knowledge-graph",
    caseIndex: 4,
    x: 650,
    y: 740,
    width: 650,
    height: 470,
    depth: 145,
    rotation: -1,
    visual: "knowledge-graph",
    eyebrow: "Route map",
    heading: "Find the knowledge frontier",
    ariaLabel: "Open case 5: the prerequisite knowledge graph",
  },
  {
    id: "direction-rule",
    caseIndex: 4,
    x: 760,
    y: 1235,
    width: 590,
    height: 210,
    depth: 90,
    rotation: 1.4,
    visual: "direction-rule",
    eyebrow: "Direction rule",
    heading: "Plan backwards. Learn forwards.",
    ariaLabel: "Open case 5: planning top-down and learning bottom-up",
  },
  {
    id: "practice-loop",
    caseIndex: 5,
    x: 90,
    y: 690,
    width: 490,
    height: 530,
    depth: 135,
    rotation: 1.6,
    visual: "practice-loop",
    eyebrow: "Capability engine",
    heading: "The deliberate learning loop",
    ariaLabel: "Open case 6: the attempt and feedback loop",
  },
  {
    id: "react-example",
    caseIndex: 5,
    x: 120,
    y: 1240,
    width: 560,
    height: 315,
    depth: 180,
    rotation: -2.2,
    visual: "react-example",
    eyebrow: "Worked case",
    heading: "Accessible filter panel",
    ariaLabel: "Open case 6: the React learning example",
  },
  {
    id: "activity-card",
    caseIndex: 6,
    x: 1420,
    y: 1300,
    width: 600,
    height: 345,
    depth: 155,
    rotation: -1.3,
    visual: "activity-card",
    eyebrow: "Field exercise · 12 min",
    heading: "Build your learning frontier",
    ariaLabel: "Open case 7: the audience activity",
  },
  {
    id: "closing-rule",
    caseIndex: 7,
    x: 1920,
    y: 1260,
    width: 430,
    height: 300,
    depth: 210,
    rotation: 2,
    visual: "closing-rule",
    eyebrow: "Finding",
    heading: "Material → capability",
    ariaLabel: "Open case 8: the final commitment",
  },
] as const;

export const threadEdges: readonly ThreadEdge[] = [
  { id: "e01", from: "material-pile", to: "opening-question", kind: "sequence" },
  { id: "e02", from: "opening-question", to: "bloom-chart", kind: "sequence" },
  { id: "e03", from: "bloom-chart", to: "tutor-contract", kind: "support" },
  { id: "e04", from: "tutor-contract", to: "talent-stages", kind: "sequence" },
  { id: "e05", from: "talent-stages", to: "memory-bottleneck", kind: "sequence" },
  { id: "e06", from: "memory-bottleneck", to: "staircase", kind: "support" },
  { id: "e07", from: "staircase", to: "knowledge-graph", kind: "sequence" },
  { id: "e08", from: "knowledge-graph", to: "direction-rule", kind: "support" },
  { id: "e09", from: "direction-rule", to: "practice-loop", kind: "sequence" },
  { id: "e10", from: "practice-loop", to: "react-example", kind: "support" },
  { id: "e11", from: "react-example", to: "activity-card", kind: "sequence" },
  { id: "e12", from: "activity-card", to: "closing-rule", kind: "sequence" },
  { id: "e13", from: "opening-question", to: "knowledge-graph", kind: "support" },
] as const;
