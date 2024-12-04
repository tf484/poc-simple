using {Parts as schemaParts} from '../db/schema';

service PartsService {
    entity Parts as projection on schemaParts;
    annotate Parts with @odata.draft.enabled;
}
