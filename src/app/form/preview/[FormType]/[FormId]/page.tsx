import FormPreview from "@/components/FormPreview";

interface PreviewFormProps {
    params: { formType: string; formId: string };
  }

export default function PreviewForm({ params }: PreviewFormProps) {
    const { formType, formId } = params;


    return (
        <div>
            <FormPreview formType={formType} formId={formId} />
        </div>
    )
}