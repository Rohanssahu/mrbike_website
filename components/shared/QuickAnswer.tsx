interface QuickAnswerProps {
  children: string;
}

/**
 * Self-contained, 2–4 sentence "answer-first" callout (Phase 4 §14) — an
 * LLM lifting a paragraph out of context needs it to already be the
 * complete answer, not a sentence depending on "as discussed above."
 */
export function QuickAnswer({ children }: QuickAnswerProps) {
  return (
    <div className="border-primary bg-primary/5 rounded-r-xl border-l-4 py-4 pr-5 pl-5">
      <p data-speakable="quick-answer" className="text-foreground text-base leading-relaxed">
        {children}
      </p>
    </div>
  );
}
