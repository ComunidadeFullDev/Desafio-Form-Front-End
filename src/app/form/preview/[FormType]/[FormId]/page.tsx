import FormPreview from "@/components/FormPreview";

export default async function PreviewForm({params}: {params: { FormId: string; FormType: string }}) {

    return (
        <div>
            <FormPreview formType={params.FormType} formId={params.FormId} />
        </div>
    )
}