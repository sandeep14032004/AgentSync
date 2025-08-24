import { Dispatch, SetStateAction } from "react";

import {
  CommandResponsiveDialog,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";

interface props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const DashboardCommand = ({ open, setOpen }: props) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>Test</CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};