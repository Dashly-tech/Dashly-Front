import { useEffect, useRef, useState } from "react";
import {
  HiOutlineCheck,
  HiOutlinePencilSquare,
  HiOutlineUserMinus,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import styles from "./BasketDrawer.module.css";

type MemberStatus = "pending" | "accepted" | "ignored";

type GroupMember = {
  id: number;
  name: string;
  status: MemberStatus;
};

const createMember = (number: number): GroupMember => ({
  id: number,
  name: `Person ${number}`,
  status: "pending",
});

export default function GroupBasketContent() {
  const [members, setMembers] = useState<GroupMember[]>([createMember(1)]);
  const [tableNumber, setTableNumber] = useState("");
  const [editingMemberId, setEditingMemberId] = useState<number | null>(null);
  const [draftName, setDraftName] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingMemberId === null) return;

    nameInputRef.current?.focus();
    nameInputRef.current?.select();
  }, [editingMemberId]);

  const handleAddPerson = () => {
    setMembers((prev) => [...prev, createMember(prev.length + 1)]);
  };

  const handleAccept = (id: number) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, status: "accepted" } : member,
      ),
    );
  };

  const handleIgnore = (id: number) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, status: "ignored" } : member,
      ),
    );
  };

  const startEditing = (member: GroupMember) => {
    setEditingMemberId(member.id);
    setDraftName(member.name);
  };

  const saveMemberName = (memberId: number, previousName: string) => {
    const trimmed = draftName.trim();

    if (trimmed) {
      setMembers((prev) =>
        prev.map((member) =>
          member.id === memberId ? { ...member, name: trimmed } : member,
        ),
      );
    } else {
      setMembers((prev) =>
        prev.map((member) =>
          member.id === memberId ? { ...member, name: previousName } : member,
        ),
      );
    }

    setEditingMemberId(null);
    setDraftName("");
  };

  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>Group Members</h3>

      <ul className={styles.memberList}>
        {members.map((member) => {
          const isEditing = editingMemberId === member.id;

          return (
            <li
              key={member.id}
              className={`${styles.memberCard} ${
                member.status === "ignored" ? styles.memberCardIgnored : ""
              }`}
            >
              <div className={styles.memberCardTop}>
                {isEditing ? (
                  <input
                    ref={nameInputRef}
                    type="text"
                    className={styles.memberNameInput}
                    value={draftName}
                    aria-label={`${member.name} adını redaktə et`}
                    onChange={(e) => setDraftName(e.target.value)}
                    onBlur={() => saveMemberName(member.id, member.name)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        saveMemberName(member.id, member.name);
                      }
                    }}
                  />
                ) : (
                  <span className={styles.memberName}>{member.name}</span>
                )}

                <button
                  type="button"
                  className={styles.memberEdit}
                  aria-label={`${member.name} adını redaktə et`}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => startEditing(member)}
                >
                  <HiOutlinePencilSquare />
                </button>
              </div>

              <p className={styles.memberStatus}>Məhsul yoxdur</p>

              <div className={styles.memberActions}>
                <button
                  type="button"
                  className={`${styles.acceptBtn} ${
                    member.status === "accepted" ? styles.acceptBtnActive : ""
                  }`}
                  onClick={() => handleAccept(member.id)}
                  aria-pressed={member.status === "accepted"}
                >
                  <HiOutlineCheck aria-hidden="true" />
                  <span>Accept</span>
                </button>
                <button
                  type="button"
                  className={`${styles.ignoreBtn} ${
                    member.status === "ignored" ? styles.ignoreBtnActive : ""
                  }`}
                  onClick={() => handleIgnore(member.id)}
                  aria-pressed={member.status === "ignored"}
                >
                  <HiOutlineUserMinus aria-hidden="true" />
                  <span>Ignore</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className={styles.addPersonBtn}
        onClick={handleAddPerson}
      >
        <HiOutlineUserPlus aria-hidden="true" />
        <span>Add Person</span>
      </button>

      <div className={styles.tableSection}>
        <label className={styles.tableLabel} htmlFor="basket-table-number">
          Masa nömrəsi
        </label>
        <input
          id="basket-table-number"
          type="text"
          className={styles.tableInput}
          placeholder="Masa nömrənizi yazın"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>
    </div>
  );
}
