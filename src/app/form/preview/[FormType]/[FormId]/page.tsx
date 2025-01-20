import FormPreview from "@/components/FormPreview";


export default async function PreviewForm({
    params,
  }: {
    params: Promise<{ FormId: string; FormType: string }>
  }) {
    const { FormId, FormType } = (await params)

    return (
        <div>
            <FormPreview formType={FormType} formId={FormId} />
        </div>
    )
}