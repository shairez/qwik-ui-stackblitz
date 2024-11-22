import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { cn } from "@qwik-ui/utils";
import {
  LuAlertTriangle,
  LuBell,
  LuCheck,
  LuChevronDown,
  LuX,
} from "@qwikest/icons/lucide";
import {
  Accordion,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  buttonVariants,
  Card,
  Checkbox,
  Combobox,
  Input,
  Label,
  Modal,
  Popover,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Tabs,
  Textarea,
  Toggle
} from "~/components/ui";
import { Alert } from "~/components/ui/alert/alert";

export default component$(() => {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  const fruits = [
    "Apple",
    "Apricot",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Currant",
    "Cherry",
    "Coconut",
  ];

  const showModal = useSignal(false);

  return (
    <div class="mx-auto flex w-8/12 flex-col gap-10 p-10">
  <section class="">
   <form action="">
  <div>
      <div>
        <Toggle>B</Toggle>
      </div>
      <div
        aria-label="description"
        role="textbox"
        class="mt-3 min-h-40 rounded-base border border-input hover:cursor-text bg-background px-3 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        contentEditable="true"
        onInput$={(e) => console.log('EVENT input: ', e.target.innerHTML)}
      ></div>
    </div>
    </form>
      </section>
    </div>
    
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
