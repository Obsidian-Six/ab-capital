import { Icon } from "@/components/Icon";
import { WHATSAPP_LINK, contact } from "@/content/site";

/** Floating WhatsApp "Chat Now" (left) and call button (right), as on the live site. */
export function FloatingButtons() {
  return (
    <>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2"
        aria-label="Chat with AB Capital on WhatsApp"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white shadow-lg">
          <Icon name="whatsapp" className="h-7 w-7" />
        </span>
        <span className="hidden rounded-full bg-brand-deep px-3 py-1 text-[12px] font-medium text-white shadow sm:block">Chat Now</span>
      </a>
      <a
        href={contact.phoneHref}
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg"
        aria-label={`Call AB Capital on ${contact.phoneDisplay}`}
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
    </>
  );
}
