import { useEffect, useRef, useState } from "react";
import {
  HiOutlineCheck,
  HiOutlinePencilSquare,
  HiOutlineUserMinus,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import styles from "./BasketDrawer.module.css";
import { useGroupBasketStore } from "../../../../app/store/gorup.store";
import { useCartStore } from "../../../../app/store/cart.store";

type MemberStatus = "pending" | "accepted" | "ignored";

type GroupMember = {
  id: number;
  name: string;
  status: MemberStatus;
};



export default function GroupBasketContent() {
  const [editingMemberId, setEditingMemberId] = useState<number | null>(null);
  const [draftName, setDraftName] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);
    const items = useCartStore((state) => state.items);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const {
    members,
    tableNumber,
    addPerson,
    acceptMember,
    ignoreMember,
    updateMemberName,
    setTableNumber,
  } = useGroupBasketStore();
  useEffect(() => {
    if (editingMemberId === null) return;

    nameInputRef.current?.focus();
    nameInputRef.current?.select();
  }, [editingMemberId]);


const startEditing = (member: GroupMember) => { setEditingMemberId(member.id); setDraftName(member.name); };
  const saveMemberName = (
    memberId: number,
    previousName: string,
  ) => {
    const trimmed = draftName.trim();

    if (trimmed) {
      updateMemberName(memberId, trimmed);
    } else {
      updateMemberName(memberId, previousName);
    }

    setEditingMemberId(null);
    setDraftName("");
  };

  return (
    <div className={styles.group}>

          {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemRow}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                />
              )}

              <div className={styles.itemBody}>
                <div className={styles.itemTop}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>
                    ₼ {item.price.toFixed(2)}
                  </span>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.quantity}>
                    <button
                      type="button"
                      className={styles.quantityBtn}
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label={`${item.name} miqdarını azalt`}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      type="button"
                      className={styles.quantityBtn}
                      onClick={() => increaseQuantity(item.id)}
                      aria-label={`${item.name} miqdarını artır`}
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.itemMeta}>
                    Cəmi: ₼{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      <h3 className={styles.groupTitle}>Group Members</h3>

      <ul className={styles.memberList}>
        {members.map((member) => {
          const isEditing = editingMemberId === member.id;

          return (
            <li
              key={member.id}
              className={`${styles.memberCard} ${member.status === "ignored" ? styles.memberCardIgnored : ""
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
                  className={`${styles.acceptBtn} ${member.status === "accepted" ? styles.acceptBtnActive : ""
                    }`}
                  onClick={() => acceptMember(member.id)}
                  aria-pressed={member.status === "accepted"}
                >
                  <HiOutlineCheck aria-hidden="true" />
                  <span>Accept</span>
                </button>
                <button
                  type="button"
                  className={`${styles.ignoreBtn} ${member.status === "ignored" ? styles.ignoreBtnActive : ""
                    }`}
                  onClick={() => ignoreMember(member.id)}
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
        onClick={addPerson}
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
