import { create } from "zustand";

type MemberStatus = "pending" | "accepted" | "ignored";

export type GroupMember = {
  id: number;
  name: string;
  status: MemberStatus;
};

const createMember = (number: number): GroupMember => ({
  id: number,
  name: `Person ${number}`,
  status: "pending",
});

interface GroupBasketStore {
  members: GroupMember[];
  tableNumber: string;

  addPerson: () => void;
  acceptMember: (id: number) => void;
  ignoreMember: (id: number) => void;
  updateMemberName: (id: number, name: string) => void;
  setTableNumber: (value: string) => void;
}

export const useGroupBasketStore = create<GroupBasketStore>((set) => ({
  members: [createMember(1)],
  tableNumber: "",

  addPerson: () =>
    set((state) => ({
      members: [
        ...state.members,
        createMember(state.members.length + 1),
      ],
    })),

  acceptMember: (id) =>
    set((state) => ({
      members: state.members.map((member) =>
        member.id === id
          ? { ...member, status: "accepted" }
          : member
      ),
    })),

  ignoreMember: (id) =>
    set((state) => ({
      members: state.members.map((member) =>
        member.id === id
          ? { ...member, status: "ignored" }
          : member
      ),
    })),

  updateMemberName: (id, name) =>
    set((state) => ({
      members: state.members.map((member) =>
        member.id === id
          ? { ...member, name }
          : member
      ),
    })),

  setTableNumber: (value) =>
    set({
      tableNumber: value,
    }),
}));