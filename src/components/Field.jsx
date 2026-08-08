export default function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  disabled,
  className = "",
  ...props
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-200 focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    </div>
  );
}
