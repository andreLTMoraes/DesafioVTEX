import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Lead } from './typings/global'
import { useCssHandles } from "vtex.css-handles"
import { FormattedMessage, useIntl } from 'react-intl'

interface LeadFormProps {
  title: string,
  cta: string
}

const CSS_HANDLES = ["container", "title", "cta", "form", "input", "button"] as const

const LeadForm: StorefrontFunctionComponent<LeadFormProps> = ({
  title,
  cta
}) => {
  const intl = useIntl();
  const { register, handleSubmit } = useForm<Lead>()
  const [leads, setLeads] = useState<Array<Lead>>([]);

  useEffect(() => localStorage.setItem('Leads', JSON.stringify(leads)), [leads])

  const onSubmit = (data: Lead) => {
    console.log("data", data);
    setLeads([...leads, data])
  };

  const handles = useCssHandles(CSS_HANDLES)
  const titleText = title || <FormattedMessage id="leadform.title" />
  const ctaText = cta || <FormattedMessage id="leadform.cta" />

  return (
      <div className={`${handles.container} pa6 ma4 mw6 br4 bg-white`}>
        <div className={`${handles.title} f2 lh-copy black-90`}>{titleText}</div>
        <div className={`${handles.cta} f4 lh-copy black-80 mb5`}>{ctaText}</div> 
        <form className={`${handles.form} flex flex-column`} onSubmit={handleSubmit(onSubmit)}>
          <input className={`${handles.input} mv3 h2 br2`} placeholder={intl.formatMessage({ id: "leadform.phname" })} id="name" {...register("name")}/>
          <input className={`${handles.input} mv3 h2 br2`} placeholder={intl.formatMessage({ id: "leadform.phemail" })} id="email" {...register("email")}/>
          <input className={`${handles.input} mv3 h2 br2`} placeholder={intl.formatMessage({ id: "leadform.phphone" })} id="phone" {...register("phone")}/>
          <button className={`${handles.button} mv4 h2 h25 bg-emphasis br2`} type="submit">Enviar</button>
        </form>
      </div>
  )
}

LeadForm.schema = {
  title: 'editor.leadform.title',
  description: 'editor.leadform.description',
  type: 'object',
  properties: {
    title: {
      title: "Titulo",
      description: "Titulo do formulário de leads",
      type: "string",
      default: null,
    },
    cta: {
      title: "CTA",
      description: "Chamada para ação do formulário",
      type: "string",
      default: null,
    }
  },
}

export default LeadForm
